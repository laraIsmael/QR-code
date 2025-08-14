import React from "react";
import "tailwindcss";

const QrCode: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-xs text-center">
      <img
        src="./assets/image-qr-code.png"
        alt="QR code"
        className="rounded-lg mb-4"
      />
      <h1 className="text-xl font-bold text-slate-800 mb-2">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-slate-500 text-sm mb-4">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QrCode;
