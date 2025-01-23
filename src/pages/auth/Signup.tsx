import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { signup } from "../../api/auth";
import { useTranslation } from "react-i18next";
import { useCountry } from "../../hooks/useCountry";
import { useValidation } from "../../hooks/useValidation";
import { Country } from "../../types/country";
import { TERMS_LINKS } from "./terms_links";

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

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { t } = useTranslation("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("1");
  const [termAgreement, setTermAgreement] = useState(false);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [marketingAgreement, setMarketingAgreement] = useState(false);

  const { country, isLoading, error } = useCountry();
  const { usernameError, emailError, passwordError, passwordConfirmError, validateUsername, validateEmail, validatePassword, validatePasswordConfirm } = useValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 모든 필드가 채워져 있는지 확인
    if (!username || !email || !password || !passwordConfirm || !selectedCountry) {
      return;
    }

    // 유효성 검사 실행
    const isUsernameValid = await validateUsername(username);
    const isEmailValid = await validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPasswordConfirmValid = validatePasswordConfirm(passwordConfirm, password);
    if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isPasswordConfirmValid) {
      return;
    }

    try {
      const response = await signup({
        name: username,
        email,
        password,
        country_id: Number(selectedCountry),
        term_agreement: termAgreement,
        privacy_agreement: privacyAgreement,
        marketing_agreement: marketingAgreement,
      });
      console.log(response);

      // setUser(response.user);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const handleCountryChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
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
    validateEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    if (passwordConfirm) {
      validatePasswordConfirm(passwordConfirm, value);
    }
  };

  const handlePasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordConfirm(value);
    validatePasswordConfirm(value, password);
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
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("passwordConfirm")}
              type="password"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              error={!!passwordConfirmError}
              helperText={passwordConfirmError}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="country-select-label">{t("country")}</InputLabel>
              <Select labelId="country-select-label" id="country-select" value={selectedCountry} onChange={handleCountryChange} input={<OutlinedInput label={t("country")} />} MenuProps={MenuProps}>
                {Array.isArray(country?.data) &&
                  country.data.map((c: Country) => (
                    <MenuItem
                      key={c.country_id}
                      value={c.country_id.toString()}
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
              <FormControlLabel
                control={<Checkbox checked={termAgreement} onChange={(e) => setTermAgreement(e.target.checked)} />}
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    flexGrow: 1,
                    marginLeft: 1,
                  },
                }}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>{t("termAgreement")}</span>
                    <IconButton size="small" onClick={() => window.open(TERMS_LINKS.terms.url, "_blank")}>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                }
              />

              <FormControlLabel
                control={<Checkbox checked={privacyAgreement} onChange={(e) => setPrivacyAgreement(e.target.checked)} />}
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    flexGrow: 1,
                    marginLeft: 1,
                  },
                }}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>{t("privacyAgreement")}</span>
                    <IconButton size="small" onClick={() => window.open(TERMS_LINKS.privacy.url, "_blank")}>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                }
              />
              <FormControlLabel
                control={<Checkbox checked={marketingAgreement} onChange={(e) => setMarketingAgreement(e.target.checked)} />}
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    flexGrow: 1,
                    marginLeft: 1,
                  },
                }}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>{t("marketingAgreement")}</span>
                    <IconButton size="small" onClick={() => window.open(TERMS_LINKS.marketing.url, "_blank")}>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={
                !username ||
                !email ||
                !password ||
                !passwordConfirm ||
                !selectedCountry ||
                !termAgreement ||
                !privacyAgreement ||
                !!usernameError ||
                !!emailError ||
                !!passwordError ||
                !!passwordConfirmError
              }
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
