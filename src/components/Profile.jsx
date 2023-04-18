import React from "react";
import light from "../assets/images/light.png";
import { RatingOptions } from "./RatingOptions";

export const Profile = () => {
  return (
    <div className="my-4 justify-center">
      <div className="flex justify-start gap-2">
        <img
          src={light}
          className="object-scale-down justify-center h-24 w-48"
          alt="logo"
        />
        <h1 className="font-bold text-4xl text-start font-sans">
          Good Morning , Malika 👋
        </h1>
      </div>
      <p className="mt-1 text-2xl text-center">
        How are you feeling today ? ✨✨
      </p>
      <div className="my-2">
        <RatingOptions />
      </div>
    </div>
  );
};
