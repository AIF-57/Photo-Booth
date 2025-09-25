import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import usePosts from "../hooks/usePosts";
import { actions } from "../actions";
import useAxios from "../hooks/useAxios";
import PostList from "../components/post/PostList";

export default function HomePage() {
  const { auth } = useAuth();
  const { state, dispatch } = usePosts();
  const { api } = useAxios();
  // console.log(auth);
  // console.log(state.posts)

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response?.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchPosts();
  }, []);

  if (state?.loading) {
    return <div className="p-5 ml-(--sidebar-width)"> Fetching posts...</div>;
  }

  if (state?.error) {
    return (
      <div className="p-5 ml-(--sidebar-width)">
        {" "}
        Error in fatching posts: {state?.error}
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto w-full py-10  ">
      <PostList posts={state.posts} />
    </div>
  );
}
