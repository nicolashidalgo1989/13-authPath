import { User } from "./user-response.interface";

export interface LoginResponse {
  user:  User;
  token: string;
}

