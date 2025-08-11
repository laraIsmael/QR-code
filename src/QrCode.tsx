import React from "react";
import "tailwindcss";

const QrCode: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center;">
      <div className="card">
        <div className="QR-code"></div>
        <div className="text-content">
          <img src="./image/image-qr-code.png" />
          <h2 className="main-text">
            Improve your frontend skills by building projects
          </h2>
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
