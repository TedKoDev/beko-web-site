import { useParams } from "react-router-dom";
import { Container, Typography, Box, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts";
import Loading from "../components/common/Loading";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id!),
  });

  if (isLoading) return <Loading />;
  if (!post) return <Typography>Post not found</Typography>;

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
}
