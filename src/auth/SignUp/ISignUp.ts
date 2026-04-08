import { IBaseEntity } from "@Shared/types/app.type";

export interface ISignUp extends IBaseEntity {
  user_id: number;
  name: string;
  mobile: string;
  email: string;
  roles: string[];
  active_role: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export interface ISignUpPayload extends IBaseEntity {
  name: string;
  mobile: string;
  email: string;
  password: string;
  role: string;
}
