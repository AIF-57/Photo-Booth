import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import Bio from "../components/profile/Bio";

export default function ProfilePage() {
  const { auth } = useAuth();
  const { api } = useAxios();

  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${
            auth?.user?._id
          }`
        );

        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);

  console.log(state);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching posts: {state?.error}</div>;
  }
  return (
    <div className="main-container">
      <div className="profile-container">
        {/* <!-- Profile Header --> */}
        <Bio/>

        <MyPosts/>
      </div>
    </div>
  );
}
