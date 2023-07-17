import React, { useState } from "react";

const BottomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white transition-transform duration-300 transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Drawer content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">Drawer Content</h2>
        <p>This is the content of the bottom drawer.</p>
      </div>

      {/* Toggle button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow"
        onClick={toggleDrawer}
      >
        {isOpen ? "Close Drawer" : "Open Drawer"}
      </button>
    </div>
  );
};

export default BottomDrawer;
