import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Home from "./home";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-12 bg-white">
        <div className="w-full md:w-1/2 p-10 rounded-3xl text-white flex items-center justify-center min-h-[400px] bg-gray-800">
          <div
            className="w-full h-full bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}
          >
            <div className="flex items-end justify-start h-full p-10">
              <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-10 rounded-3xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] mt-10 md:mt-0 md:-ml-20 z-10 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6">Log in</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative flex items-center border border-gray-300 bg-gray-100 rounded-full overflow-hidden px-4">
              <span className="text-gray-500 mr-2">👤</span>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="w-full bg-transparent py-2 focus:outline-none"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm -mt-2">
                {errors.username.message}
              </p>
            )}
            <div className="relative flex items-center border border-gray-300 bg-gray-100 rounded-full overflow-hidden px-4">
              <span className="text-gray-500 mr-2">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full bg-transparent py-2 focus:outline-none"
              />
              <span
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm -mt-2">
                {errors.password.message}
              </p>
            )}
            <div className="flex justify-between text-xs text-gray-600 px-1">
              <label>
                <input type="checkbox" className="mr-1" /> Remember Me
              </label>
              <Link to="/forgot-password" className="text-gray-500">
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full"
            >
              Log in
            </button>
            <div className="text-center text-gray-400">Or</div>
            <Link
              to="/signup"
              className="block text-center bg-gray-200 py-2 rounded-full"
            >
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
