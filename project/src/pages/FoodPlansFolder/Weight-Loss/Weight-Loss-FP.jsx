// import { useState, useEffect } from "react";
import "./Weight-Loss-FP.css";
import Navbar from "../../../assets/navFolder/Navbar";
import Temp from "../template/Temp";

const WeightLoss = () => {
  return (
    <>
      <Navbar />
      <Temp
        main_banner_bg="./imgs/weight_loss_main_bg.png"
        main_banner_title="Weight Loss"
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
        sec3_title="Harnessing Healthy Fats for Weight Loss"
        sec3_description="
Healthy fats are essential for weight loss, helping you stay full and boost metabolism. This section covers how to include them in your diet for effective results."
        sec3_cards={[
          {
            img: "./imgs/wieght_loss_sec3_img1.png",
            coloredText: "Include Fats in Every Meal:",
            text: "Adding healthy fats to your meals helps you feel full longer, reducing overeating.",
          },
          {
            img: "./imgs/wieght_loss_sec3_img2.png",
            coloredText: "Eat Nuts and Seeds",
            text: " Nuts like almonds and walnuts, and seeds like chia seeds, are rich in healthy fats and fiber that support weight loss.",
          },
          {
            img: "./imgs/wieght_loss_sec3_img3.png",
            coloredText: "Replace Butter with Avocado:",
            text: "Use avocado as a substitute for butter in sandwiches or salads, as it's an excellent source of healthy fats.",
          },
          {
            img: "./imgs/wieght_loss_sec3_img4.png",
            coloredText: "Control Portion Sizes: ",
            text: "While healthy fats are beneficial, they should be consumed in moderation as they are calorie-dense.",
          },
        ]}
        sec4_title="Protein: The Key to Effective Weight Loss"
        sec4_list={[
          {
            coloredText: "Start Your Day with Protein:",
            text: "A high-protein breakfast (like eggs or Greek yogurt) helps reduce hunger throughout the day.",
          },
          {
            coloredText: "Include Protein in Every Meal:",
            text: "Protein keeps you full longer, helping reduce overall calorie intake.",
          },
          {
            coloredText: "Choose Lean Protein Sources:",
            text: "Go for grilled chicken, fish, legumes, and low-fat yogurt to keep calories in check.",
          },
          {
            coloredText: "Use Protein Supplements When Needed:",
            text: "Whey protein can be a satisfying, low-calorie snack option.",
          },
          {
            coloredText: "Spread Protein Intake Throughout the Day:",
            text: "Avoid concentrating it in one meal—distribute it evenly for lasting satiety.",
          },
        ]}
        sec5_coloredText={[
          "Reduce Simple Carbs:",
          "Choose Complex Carbohydrates:",
          "Focus on Timing:",
        ]}
        sec5_text={[
          " Like white sugar and pastries, as they spike blood sugar quickly and increase hunger.",
          "Such as oats, potatoes, brown rice, and whole grain bread—they digest slowly and keep you full longer",
          "Eat carbs with main meals or before workouts for energy, and reduce intake in the evening.",
        ]}
        sec6_content={{
          img: "./imgs/loss_sec6_img.png",
          title: "How to calculate calories",
        }}
        sec6_list={[
          {
            coloredText: "Calculate Your Maintenance Calories",
            text: " This is the number of calories your body needs to maintain your current weight. You can estimate it using",
          },
          {
            coloredText:
              " Then multiply your BMR by an activity factor:-Sedentary (little or no exercise): BMR × 1.2-Light activity (1–3 days/week): BMR × 1.375",
            text: "-Moderate (3–5 days/week): BMR × 1.55-Active (6–7 days/week): BMR × 1.725-Very active (twice/day training): BMR × 1.9",
          },
        ]}
      />
    </>
  );
};

export default WeightLoss;
