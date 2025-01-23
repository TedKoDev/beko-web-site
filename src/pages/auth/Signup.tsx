import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Link, Select, MenuItem, FormControl, InputLabel, OutlinedInput, SelectChangeEvent } from "@mui/material";
import { signup } from "../../api/auth";
import { useAuthStore } from "../../store/authStore";
import { useTranslation } from "react-i18next";
import { useCountry } from "../../hooks/useCountry";
import { useValidation } from "../../hooks/useValidation";
import { Country } from "../../types/country";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface SignupResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
  token: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [username, setUsername] = useState("");
  const { t } = useTranslation("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("GL");
  const { country, isLoading, error } = useCountry();
  const { usernameError, emailError, passwordError, validateUsername, validateEmail, validatePassword } = useValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 모든 필드가 채워져 있는지 확인
    if (!username || !email || !password || !selectedCountry) {
      return;
    }

    // 유효성 검사 실행
    const isUsernameValid = await validateUsername(username);
    const isEmailValid = await validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const response = (await signup({ username, email, password, country: selectedCountry })) as SignupResponse;
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleCountryChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value as string);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length >= 2) {
      validateUsername(value);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.includes("@")) {
      validateEmail(value);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        pt: "64px",
      }}
    >
      <Container maxWidth="xs">
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography component="h1" variant="h5">
            {t("title")}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
            <TextField margin="normal" required fullWidth label={t("username")} value={username} onChange={handleUsernameChange} error={!!usernameError} helperText={usernameError} />
            <TextField margin="normal" required fullWidth label={t("email")} value={email} onChange={handleEmailChange} error={!!emailError} helperText={emailError} />
            <TextField margin="normal" required fullWidth label={t("password")} type="password" value={password} onChange={handlePasswordChange} error={!!passwordError} helperText={passwordError} />
            <FormControl fullWidth margin="normal">
              <InputLabel id="country-select-label">{t("country")}</InputLabel>
              <Select labelId="country-select-label" id="country-select" value={selectedCountry} onChange={handleCountryChange} input={<OutlinedInput label={t("country")} />} MenuProps={MenuProps}>
                {Array.isArray(country?.data) &&
                  country.data.map((c: Country) => (
                    <MenuItem
                      key={c.country_id}
                      value={c.country_code}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <span>{c.flag_icon} </span>
                      <span>{c.country_name}</span>
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!username || !email || !password || !selectedCountry || !!usernameError || !!emailError || !!passwordError}
            >
              {t("signupButton")}
            </Button>
            <Link href="/login" variant="body2">
              {t("loginLink")}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
