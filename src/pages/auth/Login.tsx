import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Link, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { login } from "../../api/auth";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation("login");
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error(t("loginFailed"), error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        pt: "64px", // Navbar 높이만큼 상단 패딩
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {t("title")}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label={t("email")} value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField margin="normal" required fullWidth label={t("password")} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {t("loginButton")}
            </Button>
            <Link href="/signup" variant="body2">
              {t("signupLink")}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
