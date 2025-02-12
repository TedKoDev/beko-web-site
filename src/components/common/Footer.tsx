import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6, display: { xs: "none", sm: "block" } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Link
            href="https://berakorean.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "1.2rem", // 기존보다 크게
              fontWeight: "bold",
              color: "primary.main",
              textDecoration: "underline",
            }}
          >
            개인정보처리방침
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/terms/marketing" color="inherit">
              마케팅 동의
            </Link>
            <Link href="/terms/term" color="inherit">
              이용약관
            </Link>
          </Box>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BeraKorean. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
