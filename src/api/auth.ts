import { client } from "./client";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  username: string;
}

export const login = (data: LoginData) => client.post("/auth/login", data).then((response) => response.data);

export const signup = (data: SignupData) => client.post("/auth/signup", data).then((response) => response.data);
