import axios from "axios";
import React, { useEffect, useState } from "react";

export const RatingOptions = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const handleRatingSelect = (rating, label) => {
    console.log("Selected sticker:", label, rating);
    if (rating === selectedRating) {
      console.log("first scenario");
      setSelectedRating(null);
      setSelectedLabel(null);
    } else {
      console.log("scenario scenario");
      setSelectedRating(rating);
      setSelectedLabel(label);
    }
  };

  useEffect(() => {
    console.log("\nLabel:", selectedLabel, "\nRating:", selectedRating);
  }, [selectedLabel, selectedRating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        value: selectedRating,
        label: selectedLabel,
      };
      const response = await axios.post(
        "http://localhost:9292/ratings",
        formData
      );
      console.log("response data:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ratingOptions = [
    { value: 1, emoji: "😊", label: "Happy" },
    { value: 2, emoji: "😫", label: "Tired" },
    { value: 3, emoji: "😐", label: "Neutral" },
    { value: 4, emoji: "😕", label: "Unhappy" },
    { value: 5, emoji: "😃", label: "Good" },
    { value: 6, emoji: "🤒", label: "Sick" },
    { value: 7, emoji: "😟", label: "Worried" },
    { value: 8, emoji: "😜", label: "Excited" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 w-2/3 ml-20 gap-4 text-4xl justify-center">
          {ratingOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleRatingSelect(option.value, option.label)}
              className="text-center w-28 h-28 rounded-full bg-purple-400 hover:bg-red-400 hover:scale-110"
            >
              <span
                className={`cursor-pointer ${
                  option.value === selectedRating ? `text-yellow-500 ` : ""
                }`}
                aria-label={option.label}
                role="img"
              >
                {option.emoji}
              </span>
              <p className="text-sm">{option.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-14">
          <button
            className=" text-center block w-1/6  h-10 -ml-20 my-2 bg-purple-500 rounded-2xl  font-semibold mb-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
