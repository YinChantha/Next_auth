"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    registerUser(email, password)
      .then((res) => {
        if (res.result) {
          clearInputs();

          router.push("/login");
          window.alert("Registration successful! You can now log in.");
        } else {
          setError(res.message);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="flex md:flex-row flex-col h-screen ">
      <section className="bg-gray-50 dark:bg-gray-900 md:w-6/12 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    // required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required=""
                  />
                </div>
                {error && (
                  <p className="text-red-500 font-bold text-center">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-red-500 rounded-md py-2"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account back to{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <img
        className="md:w-6/12 w-full object-contain"
        src="/login.png"
        alt=""
      />
    </div>
  );
}
