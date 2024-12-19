import { Container, Grid, Typography } from "@mui/material";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/community/PostCard";

function Community() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        커뮤니티
      </Typography>
      <Grid container spacing={3}>
        {posts?.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Community;
