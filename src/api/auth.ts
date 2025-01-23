import { client } from "./client";
import { ErrorResponse } from "./utils";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  email: string;
  name: string;
  password: string;
  country_id: number;
  term_agreement: boolean;
  privacy_agreement: boolean;
  marketing_agreement: boolean;
}

interface CheckResponse {
  available: boolean;
  message?: string;
}

export const login = (data: LoginData) => client.post("/auth/login", data).then((response) => response.data);

export const signup = (data: SignupData) => client.post("/auth/register", data).then((response) => response.data);

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
