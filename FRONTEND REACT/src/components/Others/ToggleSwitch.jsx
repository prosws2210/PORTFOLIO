import React, { useState } from 'react';

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
              isToggled ? 'transform translate-x-full' : ''
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">Toggle</div>
      </label>
      {isToggled && <p className="mt-4 text-lg text-center">Toggle is on!</p>}
      {!isToggled && <p className="mt-4 text-lg text-center">Toggle is offf!</p>}
    </div>
  );
}

export default ToggleSwitch;
