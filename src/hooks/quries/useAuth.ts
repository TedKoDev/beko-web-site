import { useMutation } from "@tanstack/react-query";
import { signup, SignupData, LoginData, LoginResponse, SignupResponse, login } from "../../api/auth";

export const useAuth = () => {
  const signupMutation = useMutation<SignupResponse, Error, SignupData>({
    mutationFn: signup,
  });

  const loginMutation = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: login,
  });

  return {
    signupMutation,
    loginMutation,
  };
};
