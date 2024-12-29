import { Container, Typography, Paper, Box, Avatar } from "@mui/material";
import { useAuthStore } from "./authStore";

export default function Profile() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Box display="flex" alignItems="center" mb={4}>
          <Avatar sx={{ width: 100, height: 100, mr: 3 }}>{user.username[0]}</Avatar>
          <Box>
            <Typography variant="h4">{user.username}</Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
