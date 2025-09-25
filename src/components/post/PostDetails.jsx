import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { actions } from "../../actions";
import usePosts from "../../hooks/usePosts";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
import PostList from "./PostList";
import AddComment from "./AddComment";
import PostComments from "./PostComments";
import PostDetailsLeftSide from "./PostDetails/PostDetailsLeftSide";
import PostDetailsRightSide from "./PostDetails/PostDetailsRightSide";

export default function PostDetails() {
  const { postId } = useParams(); // postId comes from :postId in the route

  const { state: postState, dispatch: postDispatch } = usePosts();
  const { state: profileState, dispatch: profileDispatch } = useProfile();
  const { api } = useAxios();

  // console.log(postState);

  useEffect(() => {
    postDispatch({ type: actions.post.DATA_FETCHING });

    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${postId}`
        );
        if (response?.status === 200) {
          postDispatch({
            type: actions.post.POST_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        postDispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchPosts();
  }, [postId]);

  // fatching other posts
  const userId = postState?.post?.userId;

  useEffect(() => {
    if (!userId) return; // wait for post to load first

    profileDispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${userId}`
        );

        if (response.status === 200) {
          profileDispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        profileDispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [postState?.post?.userId]);

  const otherPosts = profileState.posts.filter((post) => post._id !== postId);

  return (
    <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
      {/* <!-- Post Details Section --> */}
      <div className="bg-white border rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row">
          {/* <!-- Left Side - Post Image --> */}
          <PostDetailsLeftSide postImg={postState.post?.image} />

          {/* <!-- Right Side - Post Info and Comments --> */}
          <PostDetailsRightSide post={postState.post}/>
        </div>
      </div>

      {/* <!-- More Posts Section --> */}
      {otherPosts?.length > 0 && (
        <div className="mb-8 mx-auto max-w-5xl">
          <h2 className="text-sm text-gray-500 font-normal mb-4">
            More posts from{" "}
            <span className="font-semibold text-black">
              {profileState?.user?.name}
            </span>
          </h2>

          <div className="grid grid-cols-3 gap-1">
            <PostList posts={otherPosts} />
          </div>
        </div>
      )}
    </div>
  );
}
