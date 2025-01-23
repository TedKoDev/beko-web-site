import { useMutation } from "@tanstack/react-query";
import { signup, SignupData } from "../../api/auth";

interface SignupResponse {
  message: string;
  username: string;
}

export const useAuth = () => {
  const signupMutation = useMutation<SignupResponse, Error, SignupData>({
    mutationFn: signup,
  });

  return {
    signupMutation,
  };
};
