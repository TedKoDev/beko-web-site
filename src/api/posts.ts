import { client } from "./client";
import { Post } from "../types/post";

export const getPosts = () => client.get<Post[]>("/posts").then((response) => response.data);

export const getPost = (id: string) => client.get<Post>(`/posts/${id}`).then((response) => response.data);

export const createPost = (data: Omit<Post, "id" | "authorId" | "createdAt" | "updatedAt">) => client.post<Post>("/posts", data).then((response) => response.data);
