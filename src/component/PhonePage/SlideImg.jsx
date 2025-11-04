import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://cdn.hoanghamobile.vn/i/home/Uploads/2025/09/03/tecno-spark-40-03.jpg",
  "https://cdn.hoanghamobile.vn/i/home/Uploads/2025/10/30/poco-m7.jpg",
  "https://cdn.hoanghamobile.vn/i/home/Uploads/2025/10/28/iphone-16-promax-cat.png",
];

export default function App() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade flex justify-center items-center">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade flex justify-center items-center">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade flex justify-center items-center">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
}
