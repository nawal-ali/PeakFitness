// import { useState, useEffect } from "react";
import "./Weight-Gain-FP.css"; // Import the CSS file
import Navbar from "../../../assets/navFolder/Navbar";
import Temp from "../template/Temp";
import Footer from "../../../assets/footerFolder/Footer";
const WeightGain = () => {
  return (
    <>
      <Navbar />
      <Temp
        main_banner_bg="./imgs/weight_gain_main_bg.png"
        main_banner_title="Weight Gain"
        sec2_title="Gain Smart, Not Just Fast"
        sec2_description="Looking to gain weight the healthy way? These quick pro tips will help you build mass, boost energy, and stay balanced — no junk required!"
        sec2_cards={[
          {
            img: "./imgs/weight_gain_sec2_img1.png",
            coloredText: "Use an online calorie calculator to determine your",
            text: "daily caloric needs based on your current weight, height, age, and activity level. ",
          },
          {
            img: "./imgs/weight_gain_sec2_img2.png",
            coloredText: "Add 500-700 extra calories per day",
            text: "to achieve gradual and healthy weight gain.",
          },
          {
            img: "./imgs/weight_gain_sec2_img3.png",
            coloredText: "Divide your meals into 5 or 6 portions ",
            text: " throughout the day and consume calorie-dense foods with high nutritional value.",
          },
          {
            img: "./imgs/weight_gain_sec2_img4.png",
            coloredText: "Snack on nuts and dried fruits",
            text: " to increase your calorie intake. ",
          },
        ]}
        sec3_title="Fuel Up with Healthy Fats"
        sec3_description="Healthy fats are your best friend when it comes to gaining weight the right way."
        sec3_cards={[
          {
            img: "./imgs/weight_gain_sec3_img1.png",
            coloredText: "Include Fats in Every Meal:",
            text: "Adding healthy fats to your meals helps you feel full longer, reducing overeating.",
          },
          {
            img: "./imgs/weight_gain_sec3_img2.png",
            coloredText: "Eat Nuts and Seeds",
            text: " Nuts like almonds and walnuts, and seeds like chia seeds, are rich in healthy fats and fiber that support weeght gain.",
          },
          {
            img: "./imgs/weight_gain_sec3_img3.png",
            coloredText: "Replace Butter with Avocado:",
            text: "Use avocado as a substitute for butter in sandwiches or salads, as it's an excellent source of healthy fats.",
          },
          {
            img: "./imgs/weight_gain_sec3_img4.png",
            coloredText: "Control Portion Sizes: ",
            text: "While healthy fats are beneficial, they should be consumed in moderation as they are calorie-dense.",
          },
        ]}
        sec4_title="Protein Power for Healthy Gains"
        sec4_list={[
          {
            coloredText: "Calculate Your Protein Needs:",
            text: "Aim to consume 1.6 to 2.2grams of protein per kg of body weight daily, especially if you're doing resistance training",
          },
          {
            coloredText: "Focus on Complete Protein Sources:",
            text: "Like: eggs, chicken, lean red meat, fish, milk, yogurt, whey protein. These foods contain all the essential amino acids your body needs for muscle building.",
          },
          {
            coloredText: "Combine Protein with Extra Calories:",
            text: "To gain weight, you need a calorie surplus. Pair protein with healthy fats and carbs (e.g., chicken breast + rice + olive oil).",
          },
          {
            coloredText: "Don't Skip Protein Before Bed:",
            text: "A snack containing slow-digesting protein like cottage cheese or Greek yogurt helps nourish muscles during sleep.",
          },
        ]}
        sec5_coloredText={[
          "Avoid Refined Carbs:",
          "Prioritize Complex Carbs:",
          "Incorporate Starchy Vegetables:",
        ]}
        sec5_text={[
          "Limit foods like white bread, sugary snacks, and sugary beverages. These don't provide much nutrition and cause blood sugar spikes and crashes.",
          "Include whole grains like brown rice, oats, quinoa, and whole wheat bread in your meals. These provide high calories and fiber, helping you gain weight in a healthy way.",
          "Add sweet potatoes, pumpkin, and peas to your diet. These starchy vegetables are nutrient-dense and provide steady energy for weight gain.",
        ]}
        sec6_content={{
          img: "./imgs/loss_sec6_img.png",
          title: "How to calculate calories",
        }}
        sec6_list={[
          {
            coloredText: "Calculate Your BMR:",
            text: "This is how many calories your body needs at rest. Use this formula: Women: BMR = 10 × weight(kg) + 6.25 × height(cm) – 5 × age – 161 Men: BMR = 10 × weight(kg) + 6.25 × height(cm) – 5 × age + 5  ",
          },
          {
            coloredText: "Add Your Activity Level: Multiply your BMR by:",
            text: "1.2 if you're not active - 1.55 if you're moderately active - 1.725 if you're very active . This gives you your TDEE = total calories burned per day.",
          },
        ]}
      />
      <div className="margin-top-10">
                          <Footer />
                        </div>
    </>
  );
};

export default WeightGain;
