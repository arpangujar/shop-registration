import React from 'react';

const ShopList = ({ shops }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Shops</h2>
      <div className="space-y-4">
        {shops.map((shop, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-bold">{shop.shopName}</h3>
            <p className="text-sm text-gray-600">{shop.contact}</p>
            <p className="text-sm text-gray-600">{shop.email}</p>
            <div className="mt-2 flex space-x-2">
              <button className="bg-green-500 text-white py-1 px-3 rounded">Offer Home Delivery</button>
              <button className="bg-yellow-500 text-white py-1 px-3 rounded">Offer Online Payment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
