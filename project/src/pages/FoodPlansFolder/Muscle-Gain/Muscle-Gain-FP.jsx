// import { useState, useEffect } from "react";
import "./Muscle-Gain-FP.css";
import Temp from "../template/Temp";
import Navbar from "../../../assets/navFolder/Navbar";
import Footer from "../../../assets/footerFolder/Footer";
import { useState } from "react";
const MuscleGain = () => {
  const [islogged, setIsLogged] = useState(() => {
        return localStorage.getItem("islogged") === "true";
      });
  return (
    <>
      <Navbar islogged={islogged} setIsLogged={setIsLogged}  showBackground={true} isExpanded={false}/>
      <Temp
        main_banner_bg="./imgs/muscle_gain_main_bg.png"
        main_banner_title="Muscle Gain"
        sec2_title="Build Smart, Grow Strong"
        sec2_description="Building muscle isn’t just about lifting weights — it starts with the right mindset, habits, and knowledge. These core tips will set you up for steady, healthy progress from day one."
        sec2_cards={[
          {
            img: "./imgs/muscle_gain_sec2_img1.png",
            coloredText: "To build muscle, you need to eat more calories",
            text: "than you burn—aim for +300 to +500 extra calories/day.",
          },
          {
            img: "./imgs/muscle_gain_sec2_img2.png",
            coloredText: "Prioritize Protein:",
            text: "Consume 1.6–2.2g of protein per kg of body weight to support muscle repair and growth. ",
          },
          {
            img: "./imgs/muscle_gain_sec2_img3.png",
            coloredText: "Don’t Skip Carbs or Fats: ",
            text: "Carbs fuel your workouts and fats support hormones—both are essential.",
          },
          {
            img: "./imgs/muscle_gain_sec2_img4.png",
            coloredText: "Hydrate Well: ",
            text: "Muscles are over 70% water—stay hydrated to support performance and recovery.",
          },
        ]}
        sec3_title="Smart Fats for Strong Gains"
        sec3_description="
Healthy fats do more than just add calories — they support hormones, recovery, and muscle growth. When used right"
        sec3_cards={[
          {
            img: "./imgs/muscle_gain_sec3_img1.png",
            coloredText: "IAdd a spoon of olive oil to main meals: ",
            text: "AIt increases your calories without adding much food volume.",
          },
          {
            img: "./imgs/muscle_gain_sec3_img2.png",
            coloredText: "Snack on nuts for calorie-dense fuel :",
            text: " A small handful of almonds or walnuts gives you healthy fats and quick energy.",
          },
          {
            img: "./imgs/muscle_gain_sec3_img3.png",
            coloredText: "Choose natural fat sources over processed ones :",
            text: "Go for avocado and olive oil instead of margarine or hydrogenated oils.",
          },
          {
            img: "./imgs/muscle_gain_sec3_img4.png",
            coloredText: "Sprinkle seeds on salads or yogurt: ",
            text: "Chia or flax seeds boost your intake of healthy fats and fiber.",
          },
        ]}
        sec4_title="Protein Power: The Secret to Muscle Building"
        sec4_list={[
          {
            coloredText: "Use protein supplements if needed: ",
            text: "Whey protein is helpful, especially post-workout or when you're short on time",
          },
          {
            coloredText: "Calculate your protein needs accurately: ",
            text: "Protein keeps you full longer, helping reduce overall calorie intake.",
          },
          {
            coloredText: "Distribute protein throughout the day: ",
            text: "Instead of eating a large amount in one meal, include protein in every meal and snack.",
          },
          {
            coloredText: "Combine protein with carbs and fats: ",
            text: "Protein alone isn’t enough — complete meals support healthy weight and muscle gain.",
          },
          {
            coloredText: "Choose high-quality protein sources: ",
            text: "Like meat, chicken, fish, eggs, yogurt, or complete plant-based proteins if you're vegetarian.",
          },
        ]}
        sec5_coloredText={[
          "Choose complex, nutritious carbohydrates:",
          "Make carbohydrates the base of every meal:",
          "FGradually increase the amount based on your goal:",
        ]}
        sec5_text={[
          "Like oats, potatoes, brown rice, pasta, and whole grains—because they provide steady energy and essential nutrients.",
          "Carbohydrates are the primary source of energy and help you easily increase your calorie intake.",
          "To avoid bloating or digestive issues, start with moderate amounts and increase over time.",
        ]}
        sec6_content={{
          img: "./imgs/muscle_gain_sec6_img.png",
          title: "Supplements for Strength Boost",
        }}
        sec6_list={[
          {
            coloredText: "Choosing the Right Type of Protein:",
            text: " Use whey protein post-workout for quick muscle building, and casein before sleep for slow absorption.",
          },
          {
            coloredText: "Focus on the Right Quantity:",
            text: "Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily for the best results.",
          },
          {
            coloredText: "Supplements Are Not a Replacement for Whole Foods:",
            text: "Supplements support your healthy diet but shouldn’t replace protein-rich foods.",
          },
        ]}
      />
      <div className="margin-top-10">
                          <Footer />
                        </div>
    </>
  );
};

export default MuscleGain;
