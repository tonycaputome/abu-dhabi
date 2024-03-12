import { useCallback } from "react";
import { Post, usePosts } from "./usePosts";
import { PostItem } from "./PostItem";

export const App = () => {
  const { posts, toggleSelectPost } = usePosts();

  const handleSelect = useCallback(
    (post: Post) => {
      toggleSelectPost(post.id);
    },
    [toggleSelectPost]
  );

  return (
    <div>
      {posts.map((post, index) => {
        return <PostItem key={index} post={post} onSelect={handleSelect} />;
      })}
    </div>
  );
};
