'use client'

import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';

const TextField = ({ label, placeholder, type = 'text', handleChange, value }) => {
  const [visible, setVisible] = useState(false);

  // Determine the input type based on visibility and the provided type
  const inputType = type === 'password' && !visible ? 'password' : 'text';

  return (
    <div className="rounded-lg w-full flex flex-col gap-3">
      {/* Label */}
      {label && <span className="text-gray-400 text-sm">{label}</span>}

      {/* Input Container */}
      <div className="border rounded-lg p-3 relative">
        {/* Input Field */}
        <input
          placeholder={placeholder}
          type={inputType}
          className="outline-none w-full"
          onChange={handleChange}
          value={value}
        />

        {/* Toggle Password Visibility Icon */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            className="absolute right-2 bottom-4 text-gray-500 hover:text-gray-700"
          >
            {visible ? <EyeIcon size={17} /> : <EyeClosedIcon size={17} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;