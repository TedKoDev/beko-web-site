import { Box, Container, Typography, Link } from "@mui/material";

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
      </Container>
    </Box>
  );
}
