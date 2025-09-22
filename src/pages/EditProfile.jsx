import { useForm } from "react-hook-form";
import ChangePassword from "../components/edit-profile/ChangePassword";
import ProfileImg from "../components/edit-profile/ProfileImg";
import ProfileInfo from "../components/edit-profile/ProfileInfo";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const navigate = useNavigate();

  const formMethods = useForm({
    defaultValues: {
      website: state.user.website,
      bio: state.user.bio,
      gender: state.user.gender,
    },
  }); // Lifted form state

  const { handleSubmit } = formMethods;

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    // dispatch({ type: actions.profile.DATA_FETCHING });

    // try {
    //   const response = await api.patch(
    //     `${import.meta.env.VITE_SERVER_BASE_URL}/users/me`,
    //     data
    //   );
    //   if (response.status === 200) {
    //     // console.log(response.data);
    //     dispatch({
    //       type: actions.profile.USER_DATA_EDITED,
    //       data: response.data,
    //     });
    //     navigate("/me");
    //   }
    // } catch (error) {
    //   dispatch({
    //     type: actions.profile.DATA_FETCH_ERROR,
    //     error: error.message,
    //   });
    // }
  };
  return (
    <div className="edit-container ">
      <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

      {/* <!-- Profile Picture Section --> */}
      <ProfileImg />

      <ProfileInfo formMethods={formMethods} />

      {/* <!-- Password Change Section --> */}
      <ChangePassword/>

      {/* <!-- Submit Button --> */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
