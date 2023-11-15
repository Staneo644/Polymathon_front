'use client';
import { useState } from 'react';

const CustomSelect = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Option 1',
    'Option 2',
    'Option 3',
  ]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleItemClick = (item: string) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            onClick={toggleOptions}
          >
            <span>Options</span>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 4a8 8 0 100 16 8 8 0 000-16z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {showOptions && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {selectedItems.map((option) => (
              <div
                key={option}
                className="px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                onClick={() => handleItemClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4">
        <p>Selected Items:</p>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const YourPage = () => {
  return (
    <div className="flex flex-col space-y-4 items-center h-100 w-100 justify-evenly text-black">
      <h1>Your Page</h1>
      <CustomSelect />
      {/* 
        <SelectComponent /> */}
    </div>
  );
};

export default YourPage;
