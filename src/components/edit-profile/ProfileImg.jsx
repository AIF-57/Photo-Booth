import { useRef } from "react";
import { actions } from "../../actions";
import useProfile from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import customEmail from "../../utils/customEmail";
import { useNavigate } from "react-router-dom";

export default function ProfileImg() {
  const fileUploaderRef = useRef();
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    event.preventDefault();

    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        // console.log(file);

        formData.append("avatar", file);
      }
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/users/me/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data,
        });
        navigate(`/profile/${state.user._id}`);
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
              state?.user.avatar
            }`}
            alt={state.user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-base">{state.user.name}</h2>
          <p className="text-gray-500">{customEmail(state.user.email)}</p>
        </div>
        <button
          onClick={handleImageUpload}
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
        >
          Change photo
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </div>
    </div>
  );
}
