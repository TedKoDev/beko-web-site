import { client } from "./client";
import { CountryResponse } from "../types/country";

export const getCountry = async (): Promise<CountryResponse> => {
  const response = await client.get<CountryResponse>("/country/list");
  return response.data;
};

export interface ApiError {
  status: number;
  message: string;
}

export interface ErrorResponse {
  response?: {
    status: number;
    data?: {
      error?: {
        status: number;
        message: string;
      };
      message?: string;
    };
  };
  message?: string;
}

export const handleApiError = (error: unknown): ApiError => {
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as ErrorResponse;
    const status = axiosError.response?.status || 500;

    switch (status) {
      case 400:
        return {
          status,
          message: axiosError.response?.data?.message || "잘못된 요청입니다",
        };
      case 401:
        return {
          status,
          message: axiosError.response?.data?.message || "인증이 필요합니다",
        };
      case 403:
        return {
          status,
          message: axiosError.response?.data?.message || "접근 권한이 없습니다",
        };
      case 404:
        return {
          status,
          message: axiosError.response?.data?.message || "리소스를 찾을 수 없습니다",
        };
      case 409:
        return {
          status,
          message: axiosError.response?.data?.error?.message || "이미 동일한 값이 존재합니다",
        };
      case 422:
        return {
          status,
          message: axiosError.response?.data?.message || "유효하지 않은 데이터입니다",
        };
      case 429:
        return {
          status,
          message: axiosError.response?.data?.message || "너무 많은 요청이 발생했습니다",
        };
      case 500:
        return {
          status,
          message: axiosError.response?.data?.message || "서버 오류가 발생했습니다",
        };
      case 503:
        return {
          status,
          message: axiosError.response?.data?.message || "서비스 점검 중입니다.",
        };
      default:
        return {
          status,
          message: axiosError.response?.data?.message || "알 수 없는 오류가 발생했습니다",
        };
    }
  }

  // 네트워크 오류 등 axios 응답이 없는 경우
  if (error instanceof Error) {
    return {
      status: 0,
      message: error.message || "네트워크 오류가 발생했습니다",
    };
  }

  return {
    status: 500,
    message: "알 수 없는 오류가 발생했습니다",
  };
};
