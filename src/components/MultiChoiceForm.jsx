import React, { useState } from "react";

const MultiChoiceForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      label: "I am having a great day today!",
      description: "feeling accomplished today?",
    },
    {
      id: 2,
      label: "Iam having a stressful day today",
      description: "Day is not soo good",
    },
    {
      id: 3,
      label: "i have a succesful day",
      description: "dDay is going on great",
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <div
        key={option.id}
        className={`option card ${
          selectedOption === option.id ? "active" : ""
        }`}
        onClick={() => handleOptionClick(option)}
      >
        <div className="border-2 border-gray-400 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <h5 className="title-font font-medium text-3xl text-gray-900">
            {option.label}
          </h5>
          <p className="leading-relaxed">{option.description}</p>
        </div>
      </div>
    ));
  };

  return <div className="flex flex-col gap-4">{renderOptions()}</div>;
};

export default MultiChoiceForm;
