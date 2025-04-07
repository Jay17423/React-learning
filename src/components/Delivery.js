import React from 'react';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl bg-white shadow-xl rounded-3xl p-10 border border-[#FEA116]/30 animate-fade-in">
        
        <div className="text-6xl mb-4">
          🛵 🚚 🍽️
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#FEA116] mb-4">
          Delivery Dashboard
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We're cooking up something exciting! 🍔🍕<br />
          Soon, you'll be able to track all your delivery records right here in real time.
        </p>

        <div className="text-5xl mb-6 animate-bounce">
          📦 🛍️ 🛒
        </div>

        <p className="text-md text-gray-500">
          Stay tuned! This feature is on the way to your door — fast, hot, and hassle-free. 😋
        </p>
      </div>
    </div>
  );
};

export default Delivery;
