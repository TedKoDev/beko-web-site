import { Container, Grid, Typography } from "@mui/material";
import { usePosts } from "../hooks/usePosts";

function Community() {
  const { data: posts, isLoading, error } = usePosts();

  console.log(posts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        커뮤니티
      </Typography>
    </Container>
  );
}

export default Community;
