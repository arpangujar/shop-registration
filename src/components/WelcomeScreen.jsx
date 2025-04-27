import React from 'react';

const WelcomeScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-300 to-white">
      <div className="text-center p-5">
        <h1 className="text-3xl font-bold">Online <span className="text-red-600">KiranaWala</span></h1>
        <p className="mt-4">Stop queue at your shop, home delivery and tablet-mobile orders</p>
        <button className="mt-6 bg-black text-white py-2 px-6 rounded">
          Experience the platform
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
