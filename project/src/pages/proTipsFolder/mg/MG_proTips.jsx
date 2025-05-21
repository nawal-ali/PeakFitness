import Navbar from "../../../assets/navFolder/Navbar";
// import Sec2_tips from "./proTips_template/components/sec2_tips/Sec2_tips";
// import Sec3_tips from "./proTips_template/components/sec3_tips/Sec3_tips";
// import Sec4_tips from "./proTips_template/components/sec4_tips/Sec4_tips";
import ProTipsTemp from "../proTips_template/ProTipsTemp";
import Footer from "../../../assets/footerFolder/Footer";
export default function MG_proTips() {
  return (
    <>
      <Navbar />
      <ProTipsTemp
        sec1_tips_img="./imgs/mg_sec1_tips.png"
        sec1_tips_title="Muscle Gain"
        sec1_tips_desc="Looking to gain muscle the right way? These pro tips will help you maximize your workouts, fuel your body properly"
        sec2_tips_img="./imgs/wl_tips_sec2.png"
        sec2_tips_title="Mistakes That Slow Down Muscle Growth"
        sec2_tips_list={[
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Calculate Your Protein Needs:",
            text: "Random workouts aren’t enough—you need a structured program with goals and progression.",
          },
          {
            img: "./logo/mg_tips_sec2_logo2.svg",
            coloredText: "Focus on Complete Protein Sources:",
            text: "If you’re not eating enough, especially protein, your body won’t build muscle even with solid training.",
          },
          {
            img: "./logo/mg_tips_sec2_logo3.svg",
            coloredText: "Combine Protein with Extra Calories:",
            text: "Muscles grow during rest, not during the workout. Less than 7 hours of sleep slows down your results.",
          },
          {
            img: "./logo/mg_tips_sec2_logo4.svg",
            coloredText: "Don't Skip Protein Before Bed:",
            text: "Too much training without enough rest can lead to fatigue and even muscle loss.",
          },
        ]}
        sec3_tips_title="Best Fat-Burning Foods"
        sec3_tips_colredTitle="Adding these foods to your diet can accelerate your weight loss results"
        sec3_tips_text={[
          "Contains antioxidants that enhance metabolism and help burn fat.",
          "Rich in healthy fats that promote satiety and improve fat burning.",
          "Contain capsaicin, which stimulates the body to burn fat.",
          "Rich in protein, they support muscle building and increase fat burning.",
        ]}
        sec3_tips_imgs={[
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec33.png",
          "./imgs/mg_tips_sec34.png",
          "./imgs/mg_tips_sec32.png",
        ]}
        sec3_tips_coloredText={[
          "Green Tea",
          "Avocado",
          "Chili Peppers",
          "Eggs",
        ]}
        sec4_tips_title="When Should You Change Your Workout Program?"
        sec4_tips_img="./imgs/mg_tips_sec4.png"
        sec4_tips_list={[
          "No increase in strength or muscle size.",
          "Lifting the same weights and doing the same reps for more than two weeks.",
          "Loss of motivation or boredom.",
          "Constant fatigue or recurring minor injuries.",
        ]}
        sec5_tips_title="Muscle-Building Foods"
        sec5_tips_coloredTitle="Your diet is important for building muscles. Proteins, carbohydrates, and healthy fats help speed up growth and recovery. Here are some foods that support this."
        sec5_tips_list={[
          {
            title: "Red meats",
            text: " help improve the body's ability to build muscle tissue.",
          },
          {
            title: "Oats",
            text: "Provide complex carbohydrates that help provide long-lasting energy.",
          },
          {
            title: "Avocado",
            text: "Contains healthy fats that support heart and brain health.",
          },
          {
            title: "Leafy vegetables",
            text: "Rich in vitamins and minerals that support muscle health.",
          },
        ]}
      />
      <div className="margin-top-10">
              <Footer />
            </div>
    </>
  );
}
