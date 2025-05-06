import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LoginCredentials } from "../Types";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLogin } from "../hooks/useLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@/components/loading/Loader";

const Login = () => {
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginCredentials> = (data) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orangeTheme-100">
      {isPending && <Loader />}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl border border-orangeTheme-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-orangeTheme-500 text-center mb-6 ">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mr-2">
            🌸
          </motion.div>
          Flower Shop Login
        </motion.h1>
        <motion.form
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-sm text-orangeTheme-700 mb-1"
              htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label
              className="block text-sm text-orangeTheme-700 mb-1"
              htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer">
              {showPassword ? (
                <FaEyeSlash className="text-orangeTheme-500 text-lg" />
              ) : (
                <FaEye className="text-orangeTheme-500 text-lg" />
              )}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              type="submit"
              className="w-full bg-orangeTheme-500 hover:bg-orangeTheme-600 text-white font-semibold py-2 rounded-md transition">
              Login
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              type="button"
              onClick={() =>
                mutate({
                  email: "Sibomsaha77@gmail.com",
                  password: "123456789",
                })
              }
              className="w-full bg-orangeTheme-500 hover:bg-orangeTheme-600 text-white font-semibold py-2 rounded-md transition">
              Get Account as Admin
            </motion.button>
          </div>
        </motion.form>
        <div className="text-center mt-4">
          <p className="text-orangeTheme-700 inline">Don't have an account? </p>
          <Link
            to="/signup"
            className="text-orangeTheme-500 hover:underline inline-block ml-1">
            SignUp
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
