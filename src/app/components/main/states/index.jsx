import React from 'react';

const States = () => {
  const states = [
    "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
    "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="bg-white  py-8 gap-8 px-4 flex flex-col items-center">
      <h1 className="text-4xl text-red-700 font-semibold mb-6 text-center">
        Your long distance move starts here
      </h1>
      <ul className="grid grid-cols-6 gap-y-5 gap-29  text-md font-medium text-gray-800 list-disc pl-5">
        {states.map((state, index) => (
            
          <li className='cursor-pointer' key={index}>{state}</li>
        ))}
      </ul>
    </div>
  );
};

export default States;
