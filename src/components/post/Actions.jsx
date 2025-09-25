import React, { useState } from "react";
import PostActions from "./PostActions";
import PostLikes from "./PostLikes";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function Actions({ post }) {
  const { auth } = useAuth();
  const { api } = useAxios();

  const [liked, setLiked] = useState(
    post.likes.some((item) => item._id === auth.user._id)
  );
  const [likedUsers, setLikedusers] = useState(post.likes || []);

  const handleLike = async () => {
    if (!liked) {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post._id}/like`
        );

        if (response.status === 200) {
          console.log(response.data);
          setLiked(true);
          setLikedusers((prev) => [...prev, auth.user]);
        }
      } catch (error) {
        console.error(error);
        setLiked(false);
      }
    } else {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post._id}/like`
        );

        if (response.status === 200) {
          console.log(response.data);
          setLiked(false);
          setLikedusers((prev) =>
            prev.filter((user) => user._id !== auth.user._id)
          );
        }
      } catch (error) {
        console.error(error);
        setLiked(true);
      }
    }
  };
  return (
    <>
      {/* <!-- Post Actions --> */}
      <PostActions onPostLike={handleLike} liked={liked} />
      {/* <!-- Likes --> */}
      <PostLikes likedUsers={likedUsers} />
    </>
  );
}
