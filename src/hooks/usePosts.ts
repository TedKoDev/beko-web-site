import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "../api/client";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => client.get("/posts").then((res) => res.data),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPost: any) => client.post("/posts", newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
