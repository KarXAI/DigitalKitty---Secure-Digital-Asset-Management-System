import React from 'react';

function SimpleApp() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">DigitalKitty</h1>
      <p className="mb-6">Simple Test App</p>
      <div className="p-4 bg-white text-black rounded">
        If you can see this, rendering is working correctly
      </div>
    </div>
  );
}

export default SimpleApp;
