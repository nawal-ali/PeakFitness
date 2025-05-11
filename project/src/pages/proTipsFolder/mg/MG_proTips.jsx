import Navbar from "../../assets/navFolder/Navbar";
import Sec2_tips from "./proTips_template/components/sec2_tips/Sec2_tips";
import Sec3_tips from "./proTips_template/components/sec3_tips/Sec3_tips";
import Sec4_tips from "./proTips_template/components/sec4_tips/Sec4_tips";
export default function MG_proTips() {
  return (
    <>
      <Navbar />
      <Sec2_tips
        sec2_tips_img="./imgs/wl_tips_sec1.png"
        sec2_tips_title="Mistakes That Slow Down Muscle Growth"
        sec2_tips_list={[
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Calculate Your Protein Needs:",
            text: "Random workouts aren’t enough—you need a structured program with goals and progression.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Focus on Complete Protein Sources:",
            text: "If you’re not eating enough, especially protein, your body won’t build muscle even with solid training.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Combine Protein with Extra Calories:",
            text: "Muscles grow during rest, not during the workout. Less than 7 hours of sleep slows down your results.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Don't Skip Protein Before Bed:",
            text: "Too much training without enough rest can lead to fatigue and even muscle loss.",
          },
        ]}
      />
      <Sec3_tips
        sec3_tips_title="Best Fat-Burning Foods"
        sec3_tips_colredTitle="Adding these foods to your diet can accelerate your weight loss results"
        sec3_tips_text={[
          "Contains antioxidants that enhance metabolism and help burn fat.",
          "Rich in healthy fats that promote satiety and improve fat burning.",
          "Contain capsaicin, which stimulates the body to burn fat.",
          "Rich in protein, they support muscle building and increase fat burning.",
        ]}
        sec3_tips_imgs="./imgs/mg_tips_sec31.png"
        sec3_tips_coloredText={[
          "Green Tea",
          "Avocado",
          "Chili Peppers",
          "Eggs",
        ]}
      />
      <Sec4_tips
        sec4_tips_title="When Should You Change Your Workout Program?"
        sec4_tips_img="./imgs/mg_tips_sec4.png"
        sec4_tips_list={[
          "No increase in strength or muscle size.",
          "Lifting the same weights and doing the same reps for more than two weeks.",
          "Loss of motivation or boredom.",
          "Constant fatigue or recurring minor injuries.",
        ]}
      />
    </>
  );
}
