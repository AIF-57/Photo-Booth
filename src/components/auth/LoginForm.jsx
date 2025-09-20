import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const {setAuth} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = {...formData}
    setAuth({user})
    navigate("/")
  };
  return (
    <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* <!-- Username/Email Field --> */}
        <div className="mb-3">
          <div className="relative">
            <Field error={errors.loginInfo}>
              <input
                {...register("loginInfo", {
                  required: "Login information is required",
                })}
                id="loginInfo"
                type="text"
                className="form-input"
                placeholder="Phone number, username, or email"
                aria-label="Phone number, username, or email"
              />
            </Field>
          </div>
        </div>

        {/* <!-- Password Field --> */}
        <div className="mb-3">
          <div className="relative">
            <Field error={errors.password}>
              <input
                {...register("password", { required: "Password is required" })}
                id="password"
                type="password"
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

        {/* <!-- Login Button --> */}
        <div className="mb-4">
          <button type="submit" className="login-button">
            Log in
          </button>
        </div>

        {/* <!-- OR Separator --> */}
        <div className="or-separator">OR</div>

        <div className="mb-4">
          <button type="submit" className="login-button">
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
