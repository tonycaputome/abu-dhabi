import React from "react";

export type Post = {
  id: string;
  likes: number;
  selected: boolean;
};

export const usePosts = () => {
  const [posts, setPosts] = React.useState<Post[]>([
    {
      id: "post-1",
      likes: 0,
      selected: false
    },
    {
      id: "post-2",
      likes: 0,
      selected: false
    },
    {
      id: "post-3",
      likes: 0,
      selected: false
    }
  ]);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setPosts((prev) => {
        const copy = [...prev];
        const randomPost = copy[Math.floor(Math.random() * copy.length)];
        const index = copy.findIndex((p) => p.id === randomPost.id);
        if (index >= 0) {
          copy[index] = {
            ...copy[index],
            likes: copy[index].likes + 1
          };
        }
        return copy;
      });
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const toggleSelectPost = React.useCallback((id: string) => {
    setPosts((prev) => {
      const copy = [...prev];
      const post = copy.find((p) => p.id === id);
      if (post) {
        const index = copy.findIndex((p) => p.id === id);
        copy[index] = { ...post, selected: !post.selected };
      }
      return copy;
    });
  }, []);

  return { posts, toggleSelectPost };
};
