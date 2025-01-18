'use client';

import { useRouter } from 'next/navigation';
import { useNavigation } from '../store/navigation';
import React, { useState } from 'react';

const UserNav = () => {
  const [selected, setSelected] = useState('exams');
  const setNavigation =  useNavigation((state) => state.setNavigation)
  const router = useRouter()

  // Navigation items
  const navItems = [
    { id: 'exams', label: 'Exams' },
    { id: 'participants', label: 'Participants' },
  ];

  const handleNavigation = (id) => {
    router.push('/admin')
    setSelected(id);
    setNavigation(id)
  }

  return (
    <div className="h-screen bg-green-400 w-1/5 flex flex-col justify-between p-8">
      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`text-xl font-medium transition-all duration-200 ${
              selected === item.id
                ? 'bg-white p-3 px-6 text-green-700 rounded-lg font-semibold'
                : 'text-white hover:bg-green-500 hover:text-white p-3 px-6 rounded-lg'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <button className="border p-3 text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all duration-200">
        Log out
      </button>
    </div>
  );
};

export default UserNav;