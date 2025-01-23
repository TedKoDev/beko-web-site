import i18next from "i18next";

export const validateEmail = (email: string) => {
  if (!email) return false;
  // RFC 5322 표준에 맞는 이메일 정규식
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validatePassword = (password: string) => {
  if (!password) return false;

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
};

export const validateUsername = (username: string) => {
  if (!username) return false;

  // 2-20자 제한
  const minLength = 2;
  const maxLength = 20;

  return username.length >= minLength && username.length <= maxLength;
};

export interface ValidationError {
  hasError: boolean;
  message: string;
}

export const getPasswordValidationError = (password: string): ValidationError => {
  const t = (key: string) => i18next.t(key, { ns: "signup" });
  if (!password) {
    return { hasError: true, message: t("passwordRequired") };
  }
  if (password.length < 8) {
    return { hasError: true, message: t("passwordMinLength") };
  }
  if (!/[A-Z]/.test(password)) {
    return { hasError: true, message: t("passwordUppercase") };
  }
  if (!/[a-z]/.test(password)) {
    return { hasError: true, message: t("passwordLowercase") };
  }
  if (!/\d/.test(password)) {
    return { hasError: true, message: t("passwordNumber") };
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { hasError: true, message: t("passwordSpecialChar") };
  }
  return { hasError: false, message: "" };
};

export const getPasswordConfirmValidationError = (passwordConfirm: string, password: string): ValidationError => {
  const t = (key: string) => i18next.t(key, { ns: "signup" });
  if (!passwordConfirm) {
    return { hasError: true, message: t("passwordConfirmRequired") };
  }
  if (passwordConfirm !== password) {
    return { hasError: true, message: t("passwordConfirmError") };
  }
  return { hasError: false, message: "" };
};

export const getUsernameValidationError = (username: string): ValidationError => {
  const t = (key: string) => i18next.t(key, { ns: "signup" });
  if (!username) {
    return { hasError: true, message: t("usernameRequired") };
  }
  if (username.length < 3) {
    return { hasError: true, message: t("usernameTooShort") };
  }
  if (username.length > 20) {
    return { hasError: true, message: t("usernameMaxLength") };
  }
  return { hasError: false, message: "" };
};

export const getEmailValidationError = (email: string): ValidationError => {
  const t = (key: string) => i18next.t(key, { ns: "signup" });
  if (!email) {
    return { hasError: true, message: t("emailRequired") };
  }
  if (!validateEmail(email)) {
    return { hasError: true, message: t("emailInvalid") };
  }
  return { hasError: false, message: "" };
};
