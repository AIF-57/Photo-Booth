import React, { useState } from "react";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import { useForm } from "react-hook-form";
import usePosts from "../../hooks/usePosts";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";

export default function PostComment({ post }) {
  const { api } = useAxios();

  const formMethods = useForm(); // Lifted form state
  const { reset } = formMethods;
  const { state, dispatch } = usePosts();

  const [comments, setComments] = useState(post?.comments || []);

  const handleComment = async (data) => {
    // console.log("Form data:", data);

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post._id}/comment`,
        data
      );
      if (response.data) {
        console.log(response.data.message);
        const newComment = response.data.comment;
        setComments((prev) => [...prev, newComment]);

        dispatch({
          type: actions.post.POST_COMMENTED,
          data: newComment,
        });
        reset({ text: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <!-- Comments --> */}
      <PostComments comments={comments} postId={post._id} />
      {/* <!-- Add Comment --> */}
      <AddComment formMethods={formMethods} onComment={handleComment} />
    </>
  );
}
