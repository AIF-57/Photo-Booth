import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import usePosts from "../../../hooks/usePosts";
import useAxios from "../../../hooks/useAxios";
import { actions } from "../../../actions";
import PostDetailsComments from "./PostDetailsComments";
import PostDetailsLikes from "./PostDetailsLikes";
import PostDetailsAddComment from "./PostDetailsAddComment";

export default function PostDetailsActions({ post }) {
  console.log(post);
  const { api } = useAxios();
  const { state, dispatch } = usePosts();

  const formMethods = useForm(); // Lifted form state
  const { reset } = formMethods;

  const [comments, setComments] = useState(post?.comments || []);
  // Sync state when post.comments changes
  useEffect(() => {
    if (post?.comments) {
      setComments(post.comments);
    }
  }, [post?.comments]);

  const onComment = async (data) => {
    setComments((prev) => [...prev, data]);
    reset({ text: "" });

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
      <PostDetailsComments comments={comments} />

      {/* <!-- Post Actions --> */}
      <PostDetailsLikes post={post} />
      {/* <PostActions post={post}/> */}

      {/* <!-- Add Comment --> */}
      <PostDetailsAddComment formMethods={formMethods} onComment={onComment} />
    </>
  );
}
