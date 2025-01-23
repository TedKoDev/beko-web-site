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

  // 2-20자, 영문, 숫자, 한글 허용
  const minLength = 2;
  const maxLength = 20;
  const validChars = /^[a-zA-Z0-9가-힣]+$/;

  return username.length >= minLength && username.length <= maxLength && validChars.test(username);
};

export interface ValidationError {
  hasError: boolean;
  message: string;
}

export const getPasswordValidationError = (password: string): ValidationError => {
  if (!password) {
    return { hasError: true, message: "비밀번호를 입력해주세요" };
  }
  if (password.length < 8) {
    return { hasError: true, message: "비밀번호는 8자 이상이어야 합니다" };
  }
  if (!/[A-Z]/.test(password)) {
    return { hasError: true, message: "대문자를 포함해야 합니다" };
  }
  if (!/[a-z]/.test(password)) {
    return { hasError: true, message: "소문자를 포함해야 합니다" };
  }
  if (!/\d/.test(password)) {
    return { hasError: true, message: "숫자를 포함해야 합니다" };
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { hasError: true, message: "특수문자를 포함해야 합니다" };
  }
  return { hasError: false, message: "" };
};

export const getUsernameValidationError = (username: string): ValidationError => {
  if (!username) {
    return { hasError: true, message: "사용자 이름을 입력해주세요" };
  }
  if (username.length < 2) {
    return { hasError: true, message: "사용자 이름은 2자 이상이어야 합니다" };
  }
  if (username.length > 20) {
    return { hasError: true, message: "사용자 이름은 20자 이하여야 합니다" };
  }
  if (!/^[a-zA-Z0-9가-힣]+$/.test(username)) {
    return { hasError: true, message: "영문, 숫자, 한글만 사용할 수 있습니다" };
  }
  return { hasError: false, message: "" };
};

export const getEmailValidationError = (email: string): ValidationError => {
  if (!email) {
    return { hasError: true, message: "이메일을 입력해주세요" };
  }
  if (!validateEmail(email)) {
    return { hasError: true, message: "올바른 이메일 형식이 아닙니다" };
  }
  return { hasError: false, message: "" };
};
