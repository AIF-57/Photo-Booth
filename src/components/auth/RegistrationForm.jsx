import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/me");
  };

  return (
    <div className="bg-white p-6 border border-gray-300 mb-3">
      {/* <!-- Headline --> */}
      <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
        Sign up to see photos and videos from your friends.
      </h2>

      <form onSubmit={handleSubmit(submitForm)}>
        {/* <!-- Email/Phone Field --> */}
        <div className="mb-2">
          <div className="relative">
            <Field error={errors.email}>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                id="email"
                className="form-input"
                placeholder="Email"
                aria-label="Email"
              />
            </Field>
          </div>
        </div>

        {/* <!-- Full Name Field --> */}
        <div className="mb-2">
          <div className="relative">
            <Field error={errors.fullName}>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                id="fullName"
                className="form-input"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </Field>
          </div>
        </div>

        {/* <!-- Password Field --> */}
        <div className="mb-3">
          <div className="relative">
            <Field error={errors.password}>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                type="password"
                id="password"
                className="form-input"
                placeholder="Password"
                aria-label="Password"
              />
            </Field>
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              Show
            </button>
          </div>
        </div>

        {/* <!-- Confirm Password Field --> */}
        <div className="mb-3">
          <div className="relative">
            <Field error={errors.confirmPassword}>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (
                    value,
                    formValues //value → the value of confirmPassword field.
                  ) =>
                    value === formValues.password || "Passwords do not match", //allValues.password → the value from the password field.
                })}
                id="confirmPassword"
                type="password"
                className="form-input"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </Field>
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              Show
            </button>
          </div>
        </div>

        {/* <!-- Sign Up Button --> */}
        <div className="mb-2">
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
