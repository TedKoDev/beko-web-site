import { Button, Typography, Paper } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Marketing() {
  return (
    <Paper sx={{ p: 4, maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        마케팅 동의 / Marketing Consent
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        아래 버튼을 클릭하여 마케팅 동의 전문을 확인하실 수 있습니다. / Click the button below to view the full marketing consent.
      </Typography>

      <Button
        variant="contained"
        startIcon={<OpenInNewIcon />}
        href="https://flame-mascara-204.notion.site/Marketing-Consent-Policy-15da507c1a6280f4b1c4d12181f1fbdb"
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
