import Navbar from "../../../assets/navFolder/Navbar";
import ProTipsTemp from "../proTips_template/ProTipsTemp";

export default function WL_proTips() {
  return (
    <>
      <Navbar />
      <ProTipsTemp
        sec1_tips_img="./imgs/wg_sec1_tips.png"
        sec1_tips_title="Weight Loss"
        sec1_tips_desc="In this section, you’ll find expert tips to help you effectively and sustainably reach your weight loss goals"
        sec2_tips_img="./imgs/wg_tips_sec2.png"
        sec2_tips_title="Effective Fat-Burning Workouts"
        sec2_tips_list={[
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Running or Brisk Walking",
            text: "Burns calories and increases heart rate.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "HIIT",
            text: "Combines intense activity with short rest periods for fast fat burning.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Swimming",
            text: "A full-body workout that burns fat and builds muscle.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Strength Training",
            text: "Builds muscle, increasing fat burn even at rest.",
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
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec31.png",
        ]}
        sec3_tips_coloredText={[
          "Green Tea",
          "Avocado",
          "Chili Peppers",
          "Eggs",
        ]}
        sec4_tips_title="Water's Role in Weight Loss"
        sec4_tips_img="./imgs/wg_tips_sec4.png"
        sec4_tips_list={[
          "Curbs Appetite: Drinking water before meals reduces hunger.",
          "Boosts Calorie Burn: Water enhances metabolism and burns more calories.",
          "Improves Exercise Performance: Hydration helps improve workout performance.",
          "Detoxifies the Body: Aids in flushing out toxins and improving body function.",
          //   "Boiled or pan-fried eggs in olive oil",
        ]}
        sec5_tips_title="Important General Tips for Weight Loss"
        sec5_tips_coloredTitle="Follow These Tips to See Faster Weight Loss Results"
        sec5_tips_list={[
          {
            title: "Anti-inflammatory Foods",
            text: "helps reduce inflammation that may negatively impact fat burning.",
          },
          {
            title: "Probiotic-rich Meals",
            text: "uch as yogurt, kefir, and pickles",
          },
          {
            title: "Low-Carb Foods",
            text: "Like leafy vegetables, broccoli, and mushrooms",
          },
          {
            title: "Calcium-Rich Foods",
            text: "can help regulate fat in the body and improve metabolism.",
          },
        ]}
      />
    </>
  );
}
