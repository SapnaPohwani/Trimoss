import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      

      {/* Main Signup Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-16 bg-white">
        <div className="w-full md:w-1/2 rounded-3xl text-white flex items-center justify-center min-h-[400px]">
          <div className="w-full h-full bg-cover bg-center rounded-3xl relative bg-[#0f141b]">
            <div className="absolute bottom-10 left-10">
              <h2 className="text-4xl font-bold text-black">Welcome!</h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[430px] bg-white p-6 md:p-8 rounded-[30px] shadow-lg mt-10 md:mt-0 md:-ml-16 z-10 border border-gray-300">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Sign up</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
                />
                <span
                  className="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <div className="flex-1 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
                />
                <span
                  className="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900">
              Create Account
            </button>

            <div className="text-center text-gray-500">Or</div>

            <Link to="/login" className="block text-center border border-gray-300 py-3 rounded-full hover:bg-gray-100">
              Log in
            </Link>
          </form>
        </div>
      </div>

      
    </div>
  );
}
