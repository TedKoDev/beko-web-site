import { useState } from "react";
import { useTranslation } from "react-i18next";
import { checkEmail, checkUsername } from "../api/auth";
import { getPasswordValidationError, getUsernameValidationError, getEmailValidationError, getPasswordConfirmValidationError } from "../utils/validation";

export const useValidation = () => {
  const { t } = useTranslation("signup");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const validateUsername = async (username: string, customError?: string) => {
    if (customError) {
      setUsernameError(customError);
      return false;
    }

    // 기본 유효성 검사
    const validationError = getUsernameValidationError(username);
    if (validationError.hasError) {
      setUsernameError(validationError.message);
      return false;
    }

    // 중복 체크
    try {
      const result = await checkUsername(username);
      if (!result.available) {
        setUsernameError(t("usernameTaken"));
        return false;
      }
      setUsernameError("");
      return true;
    } catch (error) {
      console.log(error);
      setUsernameError(t("checkFailed"));
      return false;
    }
  };

  const validateEmail = async (email: string, customError?: string) => {
    if (customError) {
      setEmailError(customError);
      return false;
    }

    // 기본 유효성 검사
    const validationError = getEmailValidationError(email);
    if (validationError.hasError) {
      setEmailError(validationError.message);
      return false;
    }

    // 중복 체크
    try {
      const result = await checkEmail(email);
      if (!result.available) {
        setEmailError(t("emailTaken"));
        return false;
      }
      setEmailError("");
      return true;
    } catch (error) {
      console.log(error);
      setEmailError(t("checkFailed"));
      return false;
    }
  };

  const validatePassword = (password: string) => {
    const validationError = getPasswordValidationError(password);
    if (validationError.hasError) {
      setPasswordError(validationError.message);
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validatePasswordConfirm = (passwordConfirm: string, password: string) => {
    const validationError = getPasswordConfirmValidationError(passwordConfirm, password);
    if (validationError.hasError) {
      setPasswordConfirmError(validationError.message);
      return false;
    }
    setPasswordConfirmError("");
    return true;
  };

  return {
    usernameError,
    emailError,
    passwordError,
    passwordConfirmError,
    validateUsername,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  };
};
