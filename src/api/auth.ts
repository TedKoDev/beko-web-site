import { client } from "./client";
import { ErrorResponse } from "./utils";

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  email: string;
  name: string;
  password: string;
  country_id: number;
  term_agreement: boolean;
  privacy_agreement: boolean;
  marketing_agreement: boolean;
}

export interface LoginResponse {
  access_token: string;
  user: any;
}

export interface CheckResponse {
  available: boolean;
  message?: string;
}

export interface SignupResponse {
  message: string;
  username: string;
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await client.post("/auth/login", data);
  return response.data as LoginResponse;
};

export const signup = async (data: SignupData): Promise<SignupResponse> => {
  const response = await client.post("/auth/register", data);
  return response.data as SignupResponse;
};

export const checkEmail = async (email: string): Promise<CheckResponse> => {
  try {
    await client.post("/auth/check-email", { email });
    return { available: true };
  } catch (error) {
    if (error && typeof error === "object" && "response" in error) {
      const errorResponse = error as ErrorResponse;
      return {
        available: false,
        message: errorResponse.response?.data?.error?.message,
      };
    }
    throw error;
  }
};

export const checkUsername = async (name: string): Promise<CheckResponse> => {
  try {
    await client.post("/auth/check-name", { name });

    return { available: true };
  } catch (error) {
    if (error && typeof error === "object" && "response" in error) {
      const errorResponse = error as ErrorResponse;
      return {
        available: false,
        message: errorResponse.response?.data?.error?.message,
      };
    }
    throw error;
  }
};
