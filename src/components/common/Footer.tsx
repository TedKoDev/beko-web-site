import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          BeraKorean
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          함께 성장하는 커뮤니티
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://BeraKorean-lab.com/">
            BeraKorean
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "", gap: 2, mt: 2 }}>
          <Link
            href="https://flame-mascara-204.notion.site/Policy-15da507c1a62806aa0cbe24c8769c536"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "inherit",
              textDecoration: "",
              display: "block",
              mb: 2,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            개인정보처리방침
          </Link>
          <RouterLink to="/terms/marketing" style={{ color: "inherit", textDecoration: "none" }}>
            마케팅 동의
          </RouterLink>
          <RouterLink to="/terms/term" style={{ color: "inherit", textDecoration: "none" }}>
            이용약관
          </RouterLink>
        </Box>
      </Container>
    </Box>
  );
}
