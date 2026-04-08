import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import SignInBackground from "../../Assets/auth/authBg.jpg";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store/app.store";
import { registerUser } from "./Signup.slice";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .matches(/^\+91[0-9]{10}$/, "Enter valid mobile (+91XXXXXXXXXX)")
      .required("Mobile is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const res = await dispatch(registerUser({ data: values })).unwrap();
      console.log("Success:", res);
      toast.success("Signup successful");
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);

      toast.error("Signup failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={SignInBackground}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-10 scale-110"
      />

      <div className="absolute inset-0 -left-[1px]"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md shadow-[0px_10px_40px_rgba(0,0,0,0.08)] rounded-[29px] p-8 border border-[#ECECEC]">
        <h2 className="text-[22px] font-bold text-center mb-6 text-[#0E0E0E]">
          Sign up
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <Field
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 border rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-medium">Mobile</label>
                <Field
                  name="mobile"
                  placeholder="+919876543210"
                  className="w-full mt-1 p-2 border rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-sm font-medium">Password</label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full mt-1 p-2 pr-10 border rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-gray-500"
                >
                  <Icon
                    icon={
                      showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                    }
                    width="20"
                  />
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-medium">Role</label>
                <Field
                  as="select"
                  name="role"
                  className="w-full mt-1 p-2 border rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select role</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Diagnostics">Diagnostics</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting}
                className={`w-full py-2 rounded-lg transition text-white ${
                  isValid && dirty
                    ? "bg-[#298AF0]"
                    : "bg-[#F2F6FA] cursor-not-allowed text-[#000]"
                }`}
              >
                Click to verify
              </button>

              {/* Redirect */}
              <p className="text-center text-sm mt-4 text-[#2F277E]">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/signin")}
                  className="text-[#000000] cursor-pointer hover:underline"
                >
                  Sign In
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
