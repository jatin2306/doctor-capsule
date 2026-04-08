import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import SignInBackground from "../../Assets/auth/authBg.jpg";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    console.log("Login Data:", values);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={SignInBackground}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-10  scale-110"
      />

      {/* Optional: slight left shift */}
      <div className="absolute inset-0 -left-[1px]"></div>
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md shadow-[0px_10px_40px_rgba(0,0,0,0.08)] rounded-[29px] p-8 border border-[#ECECEC]">
        <h2 className="text-[22px] font-bold text-center mb-6 text-[#0E0E0E]">
          Sign In
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            isValid,
            dirty,
          }: {
            isSubmitting: boolean;
            isValid: boolean;
            dirty: boolean;
          }) => (
            <Form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium">
                  Email / Mobile Number
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your Email or mobile"
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#FAFAFA]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium">Password</label>

                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full mt-1 p-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#FAFAFA]"
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <Icon
                    icon={
                      showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                    }
                    width="20"
                    height="20"
                  />
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right mt-0">
                <span
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-blue-500 cursor-pointer hover:underline"
                >
                  Forgot Password?
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting}
                className={`w-full py-2 rounded-lg transition text-white ${
                  isValid && dirty
                    ? "bg-[#298AF0]  cursor-pointer"
                    : "bg-[#F2F6FA] cursor-not-allowed text-[#000]"
                }`}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-[#D9D9D9]"></div>
          <p className="text-sm text-[#D9D9D9] whitespace-nowrap">
            Or Continue with
          </p>
          <div className="flex-1 h-px bg-[#D9D9D9]"></div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 px-10">
          <button className="flex items-center justify-center w-full border border-[#EFF0F6] bg-white py-2 rounded-lg hover:bg-gray-50 transition">
            <Icon icon="logos:google-icon" width="16" />
          </button>

          <button className="flex items-center justify-center w-full border border-[#EFF0F6] bg-white py-2 rounded-lg hover:bg-gray-50 transition">
            <Icon icon="logos:facebook" width="16" />
          </button>

          <button className="flex items-center justify-center w-full border border-[#EFF0F6] bg-white py-2 rounded-lg hover:bg-gray-50 transition">
            <Icon icon="logos:apple" width="16" />
          </button>
        </div>
        {/* Redirect to SignUp */}
        <p className="text-center text-sm mt-4 text-[#2F277E]">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className="text-[#000000] cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
