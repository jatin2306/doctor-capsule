import { createSlice } from "@reduxjs/toolkit";
import { ApiService } from "../../core/helpers/base-api/api.service";
import { ApiEndpoint } from "../../shared/constant/app-endpoint";
import { AbstractActionService } from "../../store/abstract-action.service";
import { ISignUpPayload } from "./ISignUp";

// ─── API SERVICE ─────────────────────────────────────────
const service = new ApiService<ISignUpPayload>(ApiEndpoint.register);

// ─── ACTION ──────────────────────────────────────────────
export const ACTION = {
  REGISTER: "auth/register",
} as const;

export const { createAction: registerUser } = AbstractActionService<any>(
  ACTION.REGISTER,
  service,
);

// ─── STATE ───────────────────────────────────────────────
interface IRegisterState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: IRegisterState = {
  data: null,
  loading: false,
  error: null,
};

// ─── SLICE ───────────────────────────────────────────────
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        // ✅ FIXED TOKEN STORAGE
        const accessToken = action.payload?.access_token;
        const refreshToken = action.payload?.refresh_token;

        if (accessToken) {
          localStorage.setItem("token", accessToken);
        }

        if (refreshToken) {
          localStorage.setItem("refresh_token", refreshToken);
        }
      })

      .addCase(registerUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action?.payload?.message || "Something went wrong";
      });
  },
});

// ─── EXPORT ──────────────────────────────────────────────
export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
