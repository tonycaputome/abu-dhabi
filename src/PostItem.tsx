import React from "react";
import { Post } from "./usePosts";

type PostProps = {
  post: Post;
  onSelect: (post: Post) => void;
};

export const PostItem: React.FC<PostProps> = React.memo(
  ({ post, onSelect }) => {
    return (
      <p>
        Likes: {post.likes} - Selected: {post.selected ? "Yes" : "No"}{" "}
        <button onClick={() => onSelect(post)}>Select Post</button>
      </p>
    );
  }
);
