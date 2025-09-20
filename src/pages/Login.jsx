import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="login-container rounded-md">
        {/* <!-- PhotoBooth Logo --> */}
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="PhotoBooth" className="h-[51px]" />
        </div>

        {/* <!-- Login Form --> */}
        <LoginForm />

        {/* <!-- Sign Up Box --> */}
        <div className="bg-white p-6 border border-gray-300 text-center ">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/registration" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
