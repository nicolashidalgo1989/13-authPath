import { User } from "./user-response.interface";

export interface CheckTokenResponse{
  user: User,
  token: string;
}
