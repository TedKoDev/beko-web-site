import { Box, Tab, Tabs, Container, Paper } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function Terms() {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentTab = () => {
    if (location.pathname === "/terms") return 0;
    if (location.pathname === "/terms/privacy") return 1;
    if (location.pathname === "/terms/marketing") return 2;
    return 0;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        navigate("/terms");
        break;
      case 1:
        navigate("/terms/privacy");
        break;
      case 2:
        navigate("/terms/marketing");
        break;
    }
  };

  return (
    <Box
      sx={{
        pt: {
          xs: "26px", // 모바일
          sm: "34px", // 태블릿/데스크톱
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", mt: 3 }}>
          <Paper elevation={1}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={getCurrentTab()} onChange={handleChange} variant="fullWidth" textColor="primary" indicatorColor="primary">
                <Tab label="이용약관/Terms" />
                <Tab label="개인정보처리방침/Privacy" />
                <Tab label="마케팅 동의/Marketing" />
              </Tabs>
            </Box>
            <Box sx={{ p: 3 }}>
              <Outlet />
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Terms;
