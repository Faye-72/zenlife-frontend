import React, { useState } from "react";
import zen from "../meditation.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("email", email);
  console.log("password", password);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    axios
      .post(
        "http://localhost:9292/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("response data here", res.data);
        setEmail("");
        setPassword("");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password");
      });
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
          <div>
            <h1 className=" font-bold text-4xl font-sans">zenLife</h1>
            <p className="mt-1">Your Mental Wellness diary!✨✨</p>
            <img src={zen} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="flex w-1/2 justify-center py-10 m-4 items-center bg-white">
          {error && <p>{error}</p>}
          <form className="bg-white">
            <h1 className="text-gray-800  text-center font-bold text-3xl my-1">
              Welcome Back to zenLife!
            </h1>
            <h2 className=" text-center font-medium italic text-purple-600 my-3 ml-10">
              To keep connected with us,please login to your account with your
              personal info.
            </h2>
            <h2 className="text-center font-bold text-2xl mt-2">Sign in</h2>
            <br />
            <div className="flex ml-5 mb-4 left-12">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="flex justify-center w-3/4 border-2 py-2 ml-6 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 w-2/3 outline-none border-none"
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex ml-5 mb-4 left-12 ">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="flex justify-center w-3/4 border-2 py-2 ml-6 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                className="pl-2 w-2/3 outline-none border-none"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="*****************"
                required
              />
            </div>

            <div className="flex justify-center m-5">
              <button
                className="block w-1/3 bg-purple-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="flex ml-5 justify-center">
              <p>
                Do not have an account?
                <span
                  className="text-sm ml-1 font-semibold hover:text-purple-500 cursor-pointer p-4 no-underline"
                  onClick={() => props.onFormSwitch("Signup")}
                >
                  SignUp here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
