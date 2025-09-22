import { useForm } from "react-hook-form";
import ChangePassword from "../components/edit-profile/ChangePassword";
import ProfileImg from "../components/edit-profile/ProfileImg";
import ProfileInfo from "../components/edit-profile/ProfileInfo";

export default function EditProfile() {
  const formMethods = useForm(); // Lifted form state

  const { handleSubmit } = formMethods;

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className="edit-container ">
      <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

      {/* <!-- Profile Picture Section --> */}
      <ProfileImg />

      <ProfileInfo formMethods={formMethods} />

      {/* <!-- Password Change Section --> */}
      <ChangePassword />

      {/* <!-- Submit Button --> */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
