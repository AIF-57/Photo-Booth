import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../../actions";
import usePosts from "../../hooks/usePosts";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
import PostList from "./PostList";

export default function PostDetails() {
  const { postId } = useParams(); // postId comes from :postId in the route

  const { state: postState, dispatch: postDispatch } = usePosts();
  const { state: profileState, dispatch: profileDispatch } = useProfile();
  const { api } = useAxios();

  console.log(profileState);

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

  useEffect(() => {
    if (!postState?.post?.userId) return; // wait for post to load first

    profileDispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${
            postState?.post?.userId
          }`
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

  return (
    <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
      {/* <!-- Post Details Section --> */}
      <div className="bg-white border rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row">
          {/* <!-- Left Side - Post Image --> */}
          <div className="w-full md:w-1/2 bg-black flex items-center">
            <img
              src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                postState.post?.image
              }`}
              alt="Post image"
              className="w-full post-image"
            />
          </div>

          {/* <!-- Right Side - Post Info and Comments --> */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* <!-- Post Header --> */}
            <div className="flex items-center justify-between p-3 border-b">
              <a href="./profile.html">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                          postState.post?.user?.avatar
                        }`}
                        alt={postState.post?.user?.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="ml-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">
                        {postState.post?.user?.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[10px] text-gray-600">
                        June 9, 2025 08:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-3">
              <p className="text-sm ">{postState.post?.caption}</p>
            </div>

            {/* <!-- Comments Section --> */}
            <div className="comments-section flex-grow p-3 border-b">
              {/* <!-- Post Owner Comment --> */}
              <h3 className="font-bold pb-4">Comments</h3>

              {postState?.post?.comments?.map((item) => (
                <div key={item._id} className="flex mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
                      <img
                        src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                          item.user.avatar
                        }`}
                        alt={item.user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">
                        {item.user.name}
                      </span>

                      <span className="text-xs text-gray-500 ml-2">3h</span>
                    </div>
                    <p className="text-sm mt-2 text-gray-800">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <!-- Post Actions --> */}
            <div className="p-3 border-b">
              <div className="flex justify-between mb-2">
                <div className="flex space-x-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Likes --> */}
              <div className="mb-1">
                <p className="text-sm font-semibold">
                  {postState?.post?.likes?.length} likes
                </p>
              </div>

              {/* <!-- Post Time --> */}
              <div className="mb-2">
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>

            {/* <!-- Add Comment --> */}
            <div className="p-3 flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
                <img
                  src="./assets/users/user-1.png"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="text-sm w-full outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- More Posts Section --> */}
      {profileState?.posts?.length > 0 && (
        <div className="mb-8 mx-auto max-w-5xl">
          <h2 className="text-sm text-gray-500 font-normal mb-4">
            More posts from{" "}
            <span className="font-semibold text-black">
              {profileState?.user?.name}
            </span>
          </h2>

          <div className="grid grid-cols-3 gap-1">
            <PostList posts={profileState.posts} />
          </div>
        </div>
      )}
    </div>
  );
}
