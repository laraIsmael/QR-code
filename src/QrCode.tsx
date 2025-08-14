import React from "react";
import "tailwindcss";

const QrCode: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center;">
      <div className="card">
        <div className="QR-code"></div>
        <div className="text-content">
          <img
            src="./assets/image-qr-code.png"
            className="rounded-lg"
            alt="QR Code"
          ></img>
          <h1 className="text-dark_blue text-[22px] font-bold">
            Improve your frontend skills by building projects
          </h1>
          <p className="details-text">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
