import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const { api } = useAxios();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);

    // exclude confirmPassword
    const { confirmPassword, ...apiData } = formData;
    // console.log(apiData, confirmPassword)

    try {
      let response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/users/me/password`,
        apiData
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/login")
        // const { accessToken, refreshToken, user } = response.data;

        // if (accessToken) {
        //   console.log(`registration Token: ${accessToken}`);

        //   setAuth({ accessToken, refreshToken, user });
        //   navigate("/me");
        // }
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError("changePasswordError", {
          type: "random",
          message: `${error.response.data.message}`,
        });
      } else {
        setError("changePasswordError", {
          type: "random",
          message: `${error.message}`,
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="font-medium text-lg mb-4">Change Password</h2>

          {/* <!-- Current Password --> */}
          <div className="mb-4">
            <Field label="Current Password">
              <div className="relative">
                <input
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                  id="currentPassword"
                  type="password"
                  className="form-input pr-10"
                  placeholder="Enter your current password"
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
                  Show
                </button>
              </div>
            </Field>
          </div>

          {/* <!-- New Password --> */}
          <div className="mb-4">
            <Field label="New Password" error={errors.newPassword}>
              <div className="relative">
                <input
                  {...register("newPassword", {
                    required: "A new password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  id="newPassword"
                  type="password"
                  className="form-input pr-10 mb-1"
                  placeholder="Enter new password"
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
                  Show
                </button>
              </div>
            </Field>

            {/* <!-- Password Strength Indicator --> */}
            <div className="flex w-full h-1 mb-1">
              <div className="password-strength bg-red-500 w-1/4"></div>
              <div className="password-strength bg-orange-500 w-1/4"></div>
              <div className="password-strength bg-yellow-500 w-1/4"></div>
              <div className="password-strength bg-green-500 w-1/4"></div>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              For a strong password, use at least 8 characters with a mix of
              letters, numbers, and symbols.
            </p>
          </div>

          {/* <!-- Confirm New Password --> */}
          <div className="mb-4">
            <Field label="Confirm New Password" error={errors.confirmPassword}>
              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (
                      value,
                      formValues //value → the value of confirmPassword field.
                    ) =>
                      value === formValues.newPassword ||
                      "Passwords do not match", //allValues.password → the value from the password field.
                  })}
                  id="confirmPassword"
                  type="password"
                  className="form-input pr-10"
                  placeholder="Confirm new password"
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
                  Show
                </button>
              </div>
            </Field>
          </div>

          {errors.changePasswordError && (
            <div className="mb-2">{errors?.changePasswordError?.message}</div>
          )}
          {/* <!-- Password Change Button --> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
          >
            Change Password
          </button>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              After changing your password, you'll be logged out of all devices
              except the ones you're using now.
            </p>
          </div>
        </div>
      </form>

      {/* <!-- Privacy Note --> */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Certain profile info, like your name, bio and links, is visible to
          everyone.
          <a href="#" className="text-blue-500">
            See what profile info is visible
          </a>
        </p>
      </div>
    </>
  );
}
