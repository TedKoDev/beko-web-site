import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/post/${post.id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
