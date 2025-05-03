// import { useState, useEffect } from "react";
import "./Weight-Gain-FP.css"; // Import the CSS file
import Navbar from "../../../assets/navFolder/Navbar";
import Temp from "../template/Temp";

const WeightGain = () => {
  return (
    <>
      <Navbar />
      <Temp
        main_banner_bg="./imgs/weight_gain_main_bg.png"
        main_banner_title="Weight Gain"
        sec2_title="Easy Weight Loss: Essential Tips"
        sec2_description="Achieving weight loss is easier with simple, healthy tips. This section offers effective strategies to help you reach your goals."
        sec2_cards={[
          {
            img: "./imgs/weight_loss_sec2_img1.png",
            coloredText: "Cut Down on Sugars:",
            text: "Try to reduce sugary foods and drinks, as they contribute to weight gain.",
          },
          {
            img: "./imgs/weight_loss_sec2_img2.png",
            coloredText: "Eat Small, Frequent Meals:",
            text: "Instead of three large meals, divide your food into 5-6 smaller meals throughout the day.",
          },
          {
            img: "./imgs/weight_loss_sec2_img3.png",
            coloredText: "Exercise Regularly: ",
            text: " Aim for at least 30 minutes of physical activity every day",
          },
          {
            img: "./imgs/weight_loss_sec2_img4.png",
            coloredText: "Drink Plenty of Water:",
            text: "Staying hydrated helps you feel full and boosts metabolism.",
          },
        ]}
        sec3_title="Fuel Up with Healthy Fats"
        sec3_description="Healthy fats are your best friend when it comes to gaining weight the right way."
      />
    </>
  );
};

export default WeightGain;
