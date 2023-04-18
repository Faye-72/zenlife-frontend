import React from "react";
import wellness from "../assets/images/illustration2.png";

export const Home = () => {
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
          <img
            src={wellness}
            className="object-cover h-auto w-full"
            alt="logo"
          />
        </div>
        <div className="flex justify-center py-10 m-4 bg-white">
          <div className="w-1/2 flex flex-col justify-center items-center px-6">
            <h1 className="font-bold text-5xl font-sans text-center my-1">
              zenLife
            </h1>
            <h1 className="text-gray-800 font-bold uppercase text-6xl text-center my-2">
              Tell me how you really feel
            </h1>
            <h1 className="text-gray-800 font-bold text-3xl text-center my-4">
              Track your Emotional state
            </h1>
            <p className="mt-1 text-center">
              Your Mental Wellness matters!✨✨
            </p>
            <p className="text-center">
              Welcome to ZenLife, the ultimate wellness app designed to help you
              achieve balance and mindfulness in your daily life. We understand
              the importance of mental and physical health, and our app provides
              you with the tools and resources you need to prioritize your
              well-being, simply and conveniently.
            </p>
            <p className="text-center">
              Taking care of your mental health is just as important as your
              physical health. Here, you can find the resources, tips, and
              support to help you improve your mental health and well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
