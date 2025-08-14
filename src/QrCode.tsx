import React from "react";
import "tailwindcss";

const QrCode: React.FC = () => {
  return (
    <div className="App">
      <main className="card p-5 rounded-lg">
        <img
          src="./assets/image-qr-code.png"
          alt="QR code"
          className="image w-80 rounded-lg"
        />
        <h1 className="text-2xl mt-5 header mb-5 text-center w-80">
          Improve your front-end skills by building projects
        </h1>
        <p className="about pb-7 text-sm text-center w-80">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </main>
    </div>
  );
};

export default QrCode;
