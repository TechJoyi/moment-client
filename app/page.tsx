"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import ErrorModal from "@/app/components/ErrorModal";
import SuccessModal from "@/app/components/SuccessModal";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRegister() {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      setShowError(true);
      return;
    }

    if (!form.email.includes("@")) {
      setError("Invalid email address");
      setShowError(true);
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      setShowError(true);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setShowError(true);
      return;
    }

    // SUCCESS
    localStorage.setItem("user", JSON.stringify(form));
    setShowSuccess(true);

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/images/auth-bg.png"
          alt="auth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f4f4f4] px-4 sm:px-6 py-8">

        {/* CARD */}
        <div className="w-full max-w-lg rounded-[20px] px-6 sm:px-10 py-8">

          {/* LOGO */}
          <div className="flex justify-center mt-10px mb-6">
            <img src="/images/colored-logo.png" className="h-6 w-auto" />
          </div>

          {/* TITLE */}
          <h2 className="text-center font-semibold text-[20px] leading-snug mb-6 text-black">
            CREATE YOUR <br /> MOMENT ACCOUNT
          </h2>

          {/* FORM */}
          <div className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-xs text-gray-600">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your fullname"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E2C37F]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs text-gray-600">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E2C37F]"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs text-gray-600">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E2C37F]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-xs text-gray-600">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E2C37F]"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                >
                  {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleRegister}
            className="w-full mt-7 bg-[#E2C37F] text-black py-3 rounded-lg font-medium hover:bg-[#c9a95f] transition"
          >
            Sign Up
          </button>

          {/* DIVIDER */}
          <div className="flex items-center  my-6">
            <div className="flex-1 h-1px bg-gray-300"></div>
            <p className="text-xs text-gray-500">or sign up with</p>
            <div className="flex-1 h-1px bg-gray-300"></div>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center">
  <button className="w-auto min-w-120px bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm">
    <FcGoogle />
    Google
  </button>
</div>

          {/* LOGIN */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#E2C37F]">
              Sign In
            </Link>
          </p>

        </div>
      </div>

      {/* MODALS */}
      <ErrorModal
        show={showError}
        message={error}
        onClose={() => setShowError(false)}
      />

      <SuccessModal
        show={showSuccess}
        message="Account Created Successfully!"
      />
    </div>
  );
}