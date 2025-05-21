import Navbar from "../../../assets/navFolder/Navbar";
import ProTipsTemp from "../proTips_template/ProTipsTemp";
import Footer from "../../../assets/footerFolder/Footer";

export default function WG_proTips() {
  return (
    <>
      <Navbar />
      <ProTipsTemp
        sec1_tips_img="./imgs/wg_sec1_tips.png"
        sec1_tips_title="Weight Gain"
        sec1_tips_desc="This section will guide you with smart, healthy strategies to add mass and build strength the right way."
        sec2_tips_img="./imgs/wg_tips_sec2.png"
        sec2_tips_title="Tips to Overcome Loss of Appetite"
        sec2_tips_list={[
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Eat small, frequent meals:",
            text: "Instead of 3 large meals, go for 5–6 small, easy-to-digest ones throughout the day.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Focus on calorie-dense, small portions :",
            text: "Add foods like nut butters, cheese, and avocado—high in energy without feeling too full.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Drink your calories :",
            text: "Smoothies made with whole milk, fruits, and nuts are easier on the stomach and filling.",
          },
          {
            img: "./logo/mg_tips_sec2_logo1.svg",
            coloredText: "Eat with others or during entertainment :",
            text: "A pleasant environment makes eating feel lighter and more enjoyable.",
          },
        ]}
        sec3_tips_title="Common Mistakes That Prevent Weight Gain"
        sec3_tips_colredTitle="(Even If You're Eating More)"
        sec3_tips_text={[
          "You might think you're eating a lot, but without tracking, you could still be under your needs.",
          "Skipping or delaying meals lowers your daily intake, keeping your weight stagnant.",
          "Eating without resistance training leads to fat gain, not lean muscle.",
          "Like salads and veggies—great for health, but you need calorie-dense foods too (nuts, healthy oils).",
        ]}
        sec3_tips_imgs={[
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec31.png",
          "./imgs/mg_tips_sec31.png",
        ]}
        sec3_tips_coloredText={[
          "Not Tracking Your Calories",
          "Inconsistent Meal Timing",
          "Neglecting Strength Training",
          "Relying Only on Low-Calorie, Filling Foods",
        ]}
        sec4_tips_title="High-Calorie Snacks"
        sec4_tips_img="./imgs/wg_tips_sec4.png"
        sec4_tips_list={[
          "Peanut butter with banana slices or dates",
          "Full-fat cheese cubes with nuts",
          "Whole grain toast with avocado and olive oil",
          "Roasted sweet potato with spices and olive oil",
          "Boiled or pan-fried eggs in olive oil",
        ]}
        sec5_tips_title="Best Times to Eat for Effective Weight Gain"
        sec5_tips_coloredTitle="Timing your meals right can boost weight gain effectively and support muscle growth."
        sec5_tips_list={[
          {
            title: "01",
            text: "Breakfast within the first hour of waking up",
          },
          {
            title: "02",
            text: "Eat every 3 hours",
          },
          {
            title: "03",
            text: "A filling snack before your workout",
          },
          {
            title: "04",
            text: "A protein-rich meal right after your workout",
          },
        ]}
      />
            <div className="margin-top-10">
                    <Footer />
                  </div>
    </>
  );
}
