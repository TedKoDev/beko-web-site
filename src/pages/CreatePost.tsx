import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useCreatePost } from "../hooks/usePosts";

export default function CreatePost() {
  const navigate = useNavigate();
  const createPost = useCreatePost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost.mutateAsync({ title, content });
      navigate("/community");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          새 글 작성
        </Typography>
        <TextField fullWidth label="제목" value={title} onChange={(e) => setTitle(e.target.value)} margin="normal" required />
        <TextField fullWidth label="내용" value={content} onChange={(e) => setContent(e.target.value)} margin="normal" required multiline rows={4} />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          작성하기
        </Button>
      </Box>
    </Container>
  );
}
