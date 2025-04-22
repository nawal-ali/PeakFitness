import { useState, useEffect } from "react";
import "./Weight-Loss-FP.css"; // Import the CSS file
import Navbar from "../../../assets/navFolder/Navbar";

const WeightLoss = () => {
  const [activeSection, setActiveSection] = useState("General Tips"); // الحالة الافتراضية
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animations when the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // العبارات التي نريد تسليط الضوء عليها في General Tips
  const highlightedPhrases = [
    "Calories",
    "To lose weight in a healthy way, reduce 300-700 calories per day. This will help you lose 0.5 - 1 kg per week.",
    "Cut 500 calories/day → Lose 0.5 kg per week Cut 700-1000 calories/day → Lose 0.7 - 1 kg per week",
    "Don't cut too many calories!",
    "Women should eat at least 1200-1500 calories/day, and men",
    "should eat 1500-1800 calories/day to stay healthy.",
    "Best Eating Plans for Weight Loss",
    "Option 1 (Traditional Plan):",
    "3 main meals (Breakfast, Lunch, Dinner) + 1 snack",
    "Option 2 (Intermittent Fasting):",
    "2 main meals + 1 small snack (e.g., dates, Greek yogurt)",
    "Great for those who like eating fewer meals and want to lose",
    "weight faster.",
  ];

  // العبارات التي نريد تسليط الضوء عليها في Protein
  const highlightedProteinPhrases = [
    "Distribute Protein Throughout The Day",
    "Combine Animal And Plant-Based Proteins",
    "Add Protein To Snacks",
    "Examples Of Protein Integration In A Day",
    "Breakfast",
    "Snack",
    "Lunch",
    "Snack",
    "Dinner",
  ];

  // المحتويات حسب الأقسام
  const sections = {
    "General Tips": {
      title: "General Tips",
      items: [
        "How Many Calories Should You Cut to Lose Weight?",
        "Add 500-700 Extra Calories Per Day To Achieve Gradual And Healthy Weight Gain.",
        "Divide Your Meals Into 5 Or 6 Portions Throughout The Day And Consume Calorie-Dense Foods With High Nutritional Value.",
        "Snack On Nuts And Dried Fruits To Increase Your Calorie Intake.",
        "Exercise Regularly To Enhance Muscle Mass And Promote Healthy Weight Gain.",
        "Choose energy-dense and nutrient-dense foods instead of empty-calorie foods. Nutrients include carbohydrates, protein, healthy fats, and fiber, which are good for healthy digestion but not calories, and vitamins and minerals. We list below the most important sources of each nutrient and the calorie per 100 grams.",
      ],
    },
    "Intro To Diet": {
      title: "Intro To Diet",
      items: [
        "Use oils in cooking: Add olive oil or avocado oil to salads and meals.",
        "Incorporate nuts and seeds into snacks: Enjoy a handful of nuts or sprinkle chia seeds on yogurt or oatmeal.",
        "Enjoy nut butters: Have them as a snack with toast or fruit.",
        "Eat fatty fish twice a week: Improve your omega-3 intake with salmon, mackerel, or tuna.",
        "Add avocado to your meals: Use it in salads or as a sandwich filling.",
      ],
    },
    Protein: {
      title: "Protein",
      items: [
        "Distribute Protein Throughout The Day: Consume An Equal Amount In Each Meal To Maximize Absorption.",
        "Combine Animal And Plant-Based Proteins To Get A Variety Of Essential Amino Acids.",
        "Add Protein To Snacks: Try Yogurt With Chia Seeds Or Peanut Butter On Toast.",
        "Examples Of Protein Integration In A Day:",
        "Breakfast: Boiled Eggs + Whole Wheat Toast + Cottage Cheese.",
        "Snack: A Handful Of Almonds Or Walnuts.",
        "Lunch: Grilled Chicken Breast + Brown Rice + Salad.",
        "Snack: Whey Protein Shake With Banana.",
        "Dinner: Tuna With Olive Oil And Vegetables.",
        "Protein is essential for muscle building. It provides 4 calories per gram.",
      ],
    },
    "Healthy Carbs": {
      title: "Healthy Carbs",
      items: [
        "A meal containing:",
        "100g rice (28g carbohydrates)",
        "150g chicken breast (46.5g protein)",
        "1 tablespoon olive oil (9g fat)",
        "Calories:",
        "Carbohydrates: 28 × 4 = 112 kcal",
        "Protein: 46.5 × 4 = 186 kcal",
        "Fat: 9 × 9 = 81 kcal",
        "Total: 379 kcal",
      ],
    },
    "Healthy Fats": {
      title: "Healthy Fats",
      items: [
        "Content for Carbohydrate Content In Common Foods will be added later.",
      ],
    },
    "High-Fiber Veg": {
      title: "High-Fiber Veg",
      items: [
        "Opt For Complex Carbohydrates: Choose Foods Like Oats, Brown Rice, And Quinoa, As They Provide Long-Lasting Energy And Help Maintain Stable Blood Sugar Levels.",
        "Don't Neglect Fiber: Whole Foods Such As Fruits, Vegetables, And Whole Grains Contain Carbohydrates Along With Fiber, Which Supports Digestion.",
        "Enjoy Natural Sources Of Sugar: Use Honey And Dried Fruits Instead Of Refined Sugars, Which Offer Little Nutritional Value.",
        "Incorporating Carbohydrates Into Meals:",
        "Breakfast: Oats With Dried Fruits And Honey.",
        "Lunch: Bulgur With Chicken And Vegetables.",
        "Snack: A Banana Or A Handful Of Dates.",
        "Dinner: Baked Sweet Potatoes With Salad.",
      ],
    },
    "Low-Sugar Fruits": {
      title: "Low-Sugar Fruits",
      items: [
        "Opt For Complex Carbohydrates: Choose Foods Like Oats, Brown Rice, And Quinoa, As They Provide Long-Lasting Energy And Help Maintain Stable Blood Sugar Levels.",
        "Don't Neglect Fiber: Whole Foods Such As Fruits, Vegetables, And Whole Grains Contain Carbohydrates Along With Fiber, Which Supports Digestion.",
        "Enjoy Natural Sources Of Sugar: Use Honey And Dried Fruits Instead Of Refined Sugars, Which Offer Little Nutritional Value.",
        "Incorporating Carbohydrates Into Meals:",
        "Breakfast: Oats With Dried Fruits And Honey.",
        "Lunch: Bulgur With Chicken And Vegetables.",
        "Snack: A Banana Or A Handful Of Dates.",
        "Dinner: Baked Sweet Potatoes With Salad.",
      ],
    },
  };

  // دالة لتقسيم النص وتطبيق الـ highlight على العبارات المحددة
  const renderTextWithHighlight = (text, section) => {
    const phrasesToHighlight =
      section === "Protein" ? highlightedProteinPhrases : highlightedPhrases;

    const highlightMatch = phrasesToHighlight.find((phrase) =>
      text.startsWith(phrase)
    );

    if (highlightMatch) {
      const remainingText = text.slice(highlightMatch.length);
      return (
        <>
          <span className={`highlight highlight-WL`}>{highlightMatch}</span>
          {remainingText}
        </>
      );
    }
    return text; // إذا لم يكن هناك تطابق، نعرض النص كما هو
  };

  // دالة لتحديد نوع القائمة بناءً على القسم
  const renderList = (items, section) => {
    if (section === "General Tips") {
      return (
        <ol>
          {items.map((item, index) => {
            if (
              item ===
              "Carbohydrate is one of the important sources of energy, providing 4 calories per gram."
            ) {
              return (
                <li
                  key={index}
                  className={`no-number-white no-number-white-WL`}
                >
                  {item}
                </li>
              );
            }
            return (
              <li key={index}>{renderTextWithHighlight(item, section)}</li>
            );
          })}
        </ol>
      );
    }
    if (section === "Healthy Fats") {
      return (
        <ol className="healthy-fats-list">
          {items.map((item, index) => {
            const [highlightPart, rest] = item.split(": ");
            return (
              <li key={index}>
                <span className={`highlight highlight-WL`}>{highlightPart}:</span>{" "}
                {rest}
              </li>
            );
          })}
        </ol>
      );
    }
    if (section === "Protein") {
      return (
        <>
          <ul>
            {items.map((item, index) => {
              if (item === "Examples Of Protein Integration In A Day:") {
                return (
                  <li key={index} className={`no-bullet no-bullet-WL`}>
                    <span className={`highlight highlight-WL`}>{item}</span>
                  </li>
                );
              }
              const isMealItem = index >= 4 && index <= 8;
              return (
                <li
                  key={index}
                  className={isMealItem ? "meal-item meal-item-WL" : ""}
                >
                  {renderTextWithHighlight(item, section)}
                </li>
              );
            })}
          </ul>

        </>
      );
    }
    if (section === "Healthy Carbs") {
      return (
        <ul>
          {items.map((item, index) => {
            if (item === "A meal containing:") {
              return (
                <li key={index} className={`no-bullet no-bullet-WL`}>
                  {renderTextWithHighlight(item, section)}
                  <ul>
                    {items
                      .slice(index + 1, index + 4)
                      .map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                  </ul>
                </li>
              );
            }
            if (item === "Calories:") {
              return (
                <li key={index} className={`no-bullet no-bullet-WL`}>
                  {renderTextWithHighlight(item, section)}
                  <ul>
                    {items.slice(index + 1).map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </li>
              );
            }
            if (index > 0 && index < 4) return null; // Skip items already rendered in nested list
            if (index > 4) return null; // Skip items already rendered in nested list
            return (
              <li key={index}>{renderTextWithHighlight(item, section)}</li>
            );
          })}
        </ul>
      );
    }
    return (
      <ol>
        {items.map((item, index) => (
          <li key={index}>{renderTextWithHighlight(item, section)}</li>
        ))}
      </ol>
    );
  };

  return (
    <>
      <Navbar showSearch={false} showBackground={false} />

      <div
        className={`main-content main-content-WL ${
          isMounted ? "mounted mounted-WL" : ""
        }`}
      >
        <aside className={`left-panel left-panel-WL`}>
          <h1>Weight Loss</h1>
          <div className={`button-row button-row-WL`}>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "General Tips" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("General Tips")}
            >
              General Tips
            </button>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "Intro To Diet" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("Intro To Diet")}
            >
              Intro To Diet
            </button>
          </div>
          <div className={`button-row button-row-WL centered-button`}>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "Protein" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("Protein")}
            >
              Protein
            </button>
          </div>
          <div className={`button-row button-row-WL`}>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "Healthy Carbs" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("Healthy Carbs")}
            >
              Healthy Carbs
            </button>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "Healthy Fats" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("Healthy Fats")}
            >
              Healthy Fats
            </button>
          </div>
          <div className={`button-row button-row-WL`}>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "High-Fiber Veg" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("High-Fiber Veg")}
            >
              High-Fiber Veg
            </button>
            <button
              className={`nav-button nav-button-WL ${
                activeSection === "Low-Sugar Fruits" ? "active active-WL" : ""
              }`}
              onClick={() => setActiveSection("Low-Sugar Fruits")}
            >
              Low-Sugar Fruits
            </button>
          </div>
        </aside>

        {/* Right Panel */}
        <section className={`right-panel right-panel-WL`}>
          <h2>{sections[activeSection].title}</h2>
          <div className={`horizontal-line horizontal-line-WL`}></div>
          {renderList(sections[activeSection].items, activeSection)}
        </section>
      </div>
    </>
  );
};

export default WeightLoss;