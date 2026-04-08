import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Loader from "../../../core/loader/loader.service";
import store, { RootState } from "../../../store/app.store";
import { ApiMethod } from "@Shared/types/app.type";
import { IApiResponse } from "./interfaces/IApiResponse";
import showToast from "../../../core/toaster/notification.service";
import { showToastify } from "../../../shared/components/common/CustomToast";

type ParamsType = {
  [key: string]: string | number | undefined;
};

const buildUrl = (endpoint: string, params?: ParamsType): string => {
  if (params && Object.keys(params).length > 0) {
    const urlParams = new URLSearchParams(params as Record<string, string>);
    return `${endpoint}?${urlParams.toString()}`;
  }
  return endpoint;
};

abstract class AbstractApiService {
  protected readonly headers: Record<string, string>;
  private loader: (value: boolean) => void;
  private showToast: (
    message: string,
    severity: "success" | "error" | "info" | "warning",
  ) => void;
  private static activeRequests = 0;

  constructor() {
    this.headers = {
      "Content-Type": "application/json",
    };
    this.loader = Loader;
    this.showToast = showToast;
  }

  private startLoading() {
    if (AbstractApiService.activeRequests === 0) {
      this.loader(true);
    }
    AbstractApiService.activeRequests += 1;
  }

  private stopLoading() {
    AbstractApiService.activeRequests -= 1;
    if (AbstractApiService.activeRequests === 0) {
      this.loader(false);
    }
  }

  protected async request<T>(
    method: ApiMethod,
    endpoint: string,
    data = {},
    params = {},
  ): Promise<T> {
    const isOnline = navigator.onLine;
    const path = window.location.pathname;

    if (!isOnline) {
      if (["post", "put", "delete"].includes(method)) {
        const queueItem = {
          apiUrl: `${buildUrl(endpoint, params)}`,
          requestMethod: method,
          payloadData: data,
          extractedPath: path,
        };

        const storedQueue = localStorage.getItem("queueData");
        const queueData = storedQueue ? JSON.parse(storedQueue) : [];

        queueData.push(queueItem);
        localStorage.setItem("queueData", JSON.stringify(queueData));

        showToastify(
          "You are currently offline. Your request has been queued.",
          "warning",
        );
        return Promise.resolve() as Promise<T>;
      }
    } else {
      const token = localStorage.getItem("token");

      const headersWithAuth = {
        ...this.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const config: AxiosRequestConfig = {
        method,
        url: `${endpoint}`,
        headers: headersWithAuth,
        data,
        params,
      };

      this.startLoading();
      try {
        const response: AxiosResponse<IApiResponse<T>> = await axios(config);
        if (
          (method === "post" &&
            !config?.url?.split("/")?.includes("getFilesUrlFromS3")) ||
          method === "put" ||
          method === "delete"
        ) {
          this.showToast(response.data.message, "success");
        }
        return response.data.data as T;
      } catch (error: any) {
        const log = `Error ${method}ing data from ${endpoint}`;
        const message =
          error?.response?.data?.error?.[0]?.message ||
          error?.response?.data?.message ||
          "Something went wrong";
        const statusCode: number = error?.response?.status;
        switch (statusCode) {
          case 401:
            this.showToast(message, "error");
            break;
          case 409:
          case 404:
            this.showToast(message, "warning");
            break;
          case 422:
          case 400:
          case 500:
            this.showToast(message, "error");
            break;
          default:
            this.showToast("An unexpected error occurred", "error");
            break;
        }
        throw log;
      } finally {
        this.stopLoading();
      }
    }
    return Promise.resolve() as Promise<T>;
  }

  protected get<T>(endpoint: string, params = {}): Promise<T> {
    return this.request<T>("get", endpoint, {}, params);
  }

  protected getBy<T>(endpoint: string, id: string | number): Promise<T> {
    return this.request<T>("get", `${endpoint}/${id}`);
  }

  protected getByWithParmas<T>(
    endpoint: string,
    id: string | number,
    params = {} as object,
  ): Promise<T> {
    return this.request<T>("get", `${endpoint}/${id}`, {}, params);
  }

  public post<T>(endpoint: string, data = {}): Promise<T> {
    return this.request<T>("post", endpoint, data);
  }

  protected put<T>(endpoint: string, data = {}): Promise<T> {
    return this.request<T>("put", endpoint, data);
  }

  protected delete<T>(endpoint: string): Promise<T> {
    return this.request<T>("delete", endpoint);
  }

  protected async uploadBinaryData<T>(
    endpoint: string,
    data: FormData,
  ): Promise<T> {
    try {
      const token = localStorage.getItem("token");

      const headersWithAuth = {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
      const response: AxiosResponse<IApiResponse<T>> = await axios.post(
        `${endpoint}`,
        data,
        {
          headers: headersWithAuth,
        },
      );
      this.showToast(response?.data?.message, "success");
      return response.data as T;
    } catch (error: any) {
      const message = error.response.data.error || error.response.data.message;
      this.showToast(message, "error");
      throw error.response.data;
    }
  }

  protected async updateBinaryData<T>(
    endpoint: string,
    data: FormData,
  ): Promise<T> {
    try {
      const token = localStorage.getItem("token");

      const headersWithAuth = {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
      const response: AxiosResponse<IApiResponse<T>> = await axios.put(
        `${endpoint}`,
        data,
        {
          headers: headersWithAuth,
        },
      );
      this.showToast(response?.data?.message, "success");
      return response.data as T;
    } catch (error: any) {
      const message = error.response.data.error || error.response.data.message;
      this.showToast(message, "error");
      throw error.response.data;
    }
  }
}

export default AbstractApiService;
