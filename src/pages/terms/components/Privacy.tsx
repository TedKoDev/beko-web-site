import { Button, Typography, Paper } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Privacy() {
  return (
    <Paper sx={{ p: 4, maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        개인정보처리방침 / Privacy Policy
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        아래 버튼을 클릭하여 개인정보처리방침 전문을 확인하실 수 있습니다. / Click the button below to view the full privacy policy.
      </Typography>

      <Button
        variant="contained"
        startIcon={<OpenInNewIcon />}
        href="https://flame-mascara-204.notion.site/Policy-15da507c1a62806aa0cbe24c8769c536"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 2,
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        View Terms of Use
      </Button>

      <Typography variant="body2" sx={{ mt: 4, color: "text.secondary" }}>
        * Opened in a new window
      </Typography>
    </Paper>
  );
}
