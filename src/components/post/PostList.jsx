import { useLocation } from "react-router-dom";
import PostCard from "./PostCard";
import PostThumbnail from "./PostThumbnail";

export default function PostList({ posts }) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    !!posts &&
    (currentPath === "/"
      ? posts.map((post) => <PostCard key={post._id} post={post} />)
      : posts.map((post) => <PostThumbnail key={post._id} post={post} />))
  );
}
