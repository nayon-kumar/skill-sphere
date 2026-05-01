"use client";

import MyContainer from "@/components/MyContainer/MyContainer";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    // const { data: newData, error } = await authClient.signIn.email({
    //   email: data.email,
    //   password: data.password,
    //   rememberMe: true,
    //   callbackURL: "/",
    // });
    // if (error) {
    //   toast.error(error.message, { position: "bottom-center" });
    // } else {
    //   toast.success("Sign in successfully!", { position: "bottom-center" });
    // }
  };

  const handleGoogleSignIn = () => {};

  return (
    <MyContainer className="pt-38 pb-20">
      <div className="bg-base-200 border-base-300 rounded-box  border px-5 py-10 max-w-160 mx-auto">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#403F3F] text-center">
          Login your account
        </h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset ">
            <label className="label font-semibold text-lg text-[#403F3F] mt-8">
              Email address
            </label>
            <input
              {...register("email", {
                required: "Email field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="text"
              className="input w-full mt-2"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label font-semibold text-lg mt-4 text-[#403F3F]">
              Password
            </label>
            <div className="mt-2">
              <div className="input w-full">
                <input
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  type={isShowPass ? "text" : "password"}
                  placeholder="Password"
                />

                <span
                  onClick={() => setIsShowPass(!isShowPass)}
                  className="cursor-pointer"
                >
                  {isShowPass ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </span>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-6">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center font-semibold text-[#706F6F] mt-7">
          Don't Have An Account ?{" "}
          <Link
            href="/auth/signup"
            className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text"
          >
            Register
          </Link>
        </p>
        <div className="divider text-[#706F6F] my-6">Or continue with</div>
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </MyContainer>
  );
};

export default SignInPage;
