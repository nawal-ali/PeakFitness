import React, { useState, useEffect } from 'react';
import './Weight-Gain-FP.css'; // Import the CSS file

const WeightGain = () => {
  const [activeSection, setActiveSection] = useState('General Tips'); // الحالة الافتراضية
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animations when the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // العبارات التي نريد تسليط الضوء عليها في General Tips
  const highlightedPhrases = [
    'Use An Online Calorie Calculator',
    'Add 500-700 Extra Calories Per Day',
    'Divide Your Meals Into 5 Or 6 Portions',
    'Snack On Nuts And Dried Fruits',
    'Exercise Regularly',
    'Choose Nutrient-Dense',
    'Distribute Protein Throughout The Day',
    'Combine Animal And Plant-Based Proteins',
    'Add Protein To Snacks',
    'Examples Of Protein Integration In A Day',
    'Breakfast',
    'Lunch',
    'Snack',
    'Dinner',
    'Opt For Complex Carbohydrates:',
    'Enjoy Natural Sources Of Sugar:',
    'Don\'t Neglect Fiber:',
    'Choose energy-dense and nutrient-dense foods',
    'Carbohydrate is one of the important sources of energy, providing 4 calories per gram.'
  ];

  // العبارات التي نريد تسليط الضوء عليها في Protein
  const highlightedProteinPhrases = [
    'Distribute Protein Throughout The Day',
    'Combine Animal And Plant-Based Proteins',
    'Add Protein To Snacks',
    'Examples Of Protein Integration In A Day',
    'Breakfast',
    'Snack',
    'Lunch',
    'Snack',
    'Dinner',
  ];

  // المحتويات حسب الأقسام
  const sections = {
    'General Tips': {
      title: 'General Tips',
      items: [
        'Use An Online Calorie Calculator To Determine Your Daily Caloric Needs Based On Your Current Weight, Height, Age, And Activity Level.',
        'Add 500-700 Extra Calories Per Day To Achieve Gradual And Healthy Weight Gain.',
        'Divide Your Meals Into 5 Or 6 Portions Throughout The Day And Consume Calorie-Dense Foods With High Nutritional Value.',
        'Snack On Nuts And Dried Fruits To Increase Your Calorie Intake.',
        'Exercise Regularly To Enhance Muscle Mass And Promote Healthy Weight Gain.',
        'Choose energy-dense and nutrient-dense foods instead of empty-calorie foods. Nutrients include carbohydrates, protein, healthy fats, and fiber, which are good for healthy digestion but not calories, and vitamins and minerals. We list below the most important sources of each nutrient and the calorie per 100 grams.',
        // 'Carbohydrate is one of the important sources of energy, providing 4 calories per gram.',
      ],
    },
    'Healthy Fats': {
      title: 'Healthy Fats',
      items: [
        'Incorporate avocados into your diet for a rich source of monounsaturated fats.',
        'Add olive oil to your meals for heart-healthy fats and antioxidants.',
        'Eat a handful of almonds or walnuts daily for omega-3 fatty acids.',
        'Include fatty fish like salmon or mackerel for essential omega-3s.',
        'Use coconut oil in moderation for medium-chain triglycerides (MCTs).',
        'Spread nut butter (like peanut or almond butter) on toast or fruits.',
        'Enjoy chia seeds or flaxseeds in smoothies or yogurt for healthy fats.',
        'Opt for dark chocolate (70% cocoa or higher) as a treat with healthy fats.',
        'Cook with ghee or clarified butter for a source of butyrate.',
        'Add sunflower seeds to salads for a boost of polyunsaturated fats.',
        'Fats Contain 9 Calories Per Gram And Help With Healthy Weight Gain.',
      ],
    },
    'Protein': {
      title: 'Protein',
      items: [
        'Distribute Protein Throughout The Day: Consume An Equal Amount In Each Meal To Maximize Absorption.',
        'Combine Animal And Plant-Based Proteins To Get A Variety Of Essential Amino Acids.',
        'Add Protein To Snacks: Try Yogurt With Chia Seeds Or Peanut Butter On Toast.',
        'Examples Of Protein Integration In A Day:',
        'Breakfast: Boiled Eggs + Whole Wheat Toast + Cottage Cheese.',
        'Snack: A Handful Of Almonds Or Walnuts.',
        'Lunch: Grilled Chicken Breast + Brown Rice + Salad.',
        'Snack: Whey Protein Shake With Banana.',
        'Dinner: Tuna With Olive Oil And Vegetables.',
        'Protein is essential for muscle building. It provides 4 calories per gram.',
      ],
    },
    'Carbohydrates': {
      title: 'Carbohydrates',
      items: [
        'Tips For Choosing Carbohydrates:',
        'Opt For Complex Carbohydrates: Choose Foods Like Oats, Brown Rice, And Quinoa, As They Provide Long-Lasting Energy And Help Maintain Stable Blood Sugar Levels.',
        "Don't Neglect Fiber: Whole Foods Such As Fruits, Vegetables, And Whole Grains Contain Carbohydrates Along With Fiber, Which Supports Digestion.",
        'Enjoy Natural Sources Of Sugar: Use Honey And Dried Fruits Instead Of Refined Sugars, Which Offer Little Nutritional Value.',
        'Incorporating Carbohydrates Into Meals:',
        'Breakfast: Oats With Dried Fruits And Honey.',
        'Lunch: Bulgur With Chicken And Vegetables.',
        'Snack: A Banana Or A Handful Of Dates.',
        'Dinner: Baked Sweet Potatoes With Salad.',
      ],
    },
    'How To Calculate Calories': {
      title: 'How To Calculate Calories',
      items: [
        'A meal containing:',
        '100g rice (28g carbohydrates)',
        '150g chicken breast (46.5g protein)',
        '1 tablespoon olive oil (9g fat)',
        'Calories:',
        'Carbohydrates: 28 × 4 = 112 kcal',
        'Protein: 46.5 × 4 = 186 kcal',
        'Fat: 9 × 9 = 81 kcal',
        'Total: 379 kcal',
      ],
    },
    'Carbohydrate Content In Common Foods': {
      title: 'Carbohydrate Content In Common Foods',
      items: ['Content for Carbohydrate Content In Common Foods will be added later.'],
    },
  };

  const carbData = [
    { food: "White Rice", carbs: 28 },
    { food: "Oats", carbs: 66 },
    { food: "Boiled Potatoes", carbs: 17 },
    { food: "Whole Wheat Bread", carbs: 45 },
    { food: "Quinoa", carbs: 21 },
    { food: "Cooked Pasta", carbs: 25 },
    { food: "Bulgur", carbs: 18 },
    { food: "Corn", carbs: 19 },
    { food: "Dried Fruits (e.g., Dates)", carbs: 75 },
    { food: "Cooked Chickpeas", carbs: 27 },
    { food: "Black Beans", carbs: 23 },
    { food: "Banana", carbs: 23 },
    { food: "Honey", carbs: 82 },
    { food: "Cooked Sweet Potatoes", carbs: 20 },
    { food: "Chestnuts", carbs: 44 },
    { food: "Cooked Barley", carbs: 28 },
    { food: "Fresh Fruits (e.g., Apple)", carbs: 14 },
    { food: "Oat Milk (100ml)", carbs: 10 }
  ];

  const protsData = [
    { food: "Turkey", prots: 29 },
    { food: "Canned tuna", prots: 26 },
    { food: "Canned sardines", prots: 25 },
    { food: "Shrimp", prots: 24 },
    { food: "Liver (chicken or beef)", prots: 20 },
    { food: "Egg (1 large)", prots: 6 },
    { food: "Hard cheese (e.g., cheddar)", prots: 25 },
    { food: "Greek yogurt (full fat)", prots: 10 },
    { food: "Whole milk", prots: 3.3 },
  ];

  const plantProtsData = [
    { food: "Chickpeas", prots: 19 },
    { food: "Lentils", prots: 9 },
    { food: "Black beans", prots: 8.9 },
    { food: "Fava beans", prots: 7.6 },
    { food: "Green peas", prots: 5 },
    { food: "Cooked quinoa", prots: 4.4 },
    { food: "Cooked bulgur", prots: 3.5 },
    { food: "Tofu (soy)", prots: 8 },
    { food: "Chia seeds", prots: 16 },
    { food: "Flaxseeds", prots: 18 },
  ];

  const nutsSeedsProtsData = [
    { food: "Almonds", prots: 21 },
    { food: "Walnuts", prots: 15 },
    { food: "Cashews", prots: 18 },
    { food: "Peanut butter", prots: 25 },
    { food: "Sunflower seeds", prots: 21 },
    { food: "Pumpkin seeds", prots: 19 },
  ];

  // دالة لتقسيم النص وتطبيق الـ highlight على العبارات المحددة
  const renderTextWithHighlight = (text, section) => {
    const phrasesToHighlight =
      section === 'Protein' ? highlightedProteinPhrases : highlightedPhrases;

    const highlightMatch = phrasesToHighlight.find((phrase) =>
      text.startsWith(phrase)
    );

    if (highlightMatch) {
      const remainingText = text.slice(highlightMatch.length);
      return (
        <>
          <span className={`highlight highlight-WG`}>{highlightMatch}</span>
          {remainingText}
        </>
      );
    }
    return text; // إذا لم يكن هناك تطابق، نعرض النص كما هو
  };

  // دالة لتحديد نوع القائمة بناءً على القسم
  const renderList = (items, section) => {
    if (section === 'General Tips') {
      return (
        <ol>
          {items.map((item, index) => {
            if (item === 'Carbohydrate is one of the important sources of energy, providing 4 calories per gram.') {
              return (
                <li key={index} className={`no-number-white no-number-white-WG`}>
                  {item}
                </li>
              );
            }
            return <li key={index}>{renderTextWithHighlight(item, section)}</li>;
          })}
        </ol>
      );
    }
    if (section === 'Protein') {
      return (
        <>
          <ul>
            {items.map((item, index) => {
              if (item === 'Examples Of Protein Integration In A Day:') {
                return (
                  <li key={index} className={`no-bullet no-bullet-WG`}>
                    <span className={`highlight highlight-WG`}>{item}</span>
                  </li>
                );
              }
              const isMealItem = index >= 4 && index <= 8;
              return (
                <li key={index} className={isMealItem ? 'meal-item meal-item-WG' : ''}>
                  {renderTextWithHighlight(item, section)}
                </li>
              );
            })}
          </ul>
          {/* جدول مصادر البروتين الحيوانية */}
          <h3 className={`table-title table-title-WG`}>Animal-based protein sources</h3>
          <table className={`prot-table prot-table-WG`}>
            <thead>
              <tr>
                <th>Food Source</th>
                <th>Quantity</th>
                <th>Protein (g)</th>
              </tr>
            </thead>
            <tbody>
              {protsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.food}</td>
                  <td>
                    {item.food === "Egg (1 large)" ? '50g' : 
                     item.food === "Whole milk" ? '100ml' : '100g'}
                  </td>
                  <td>{item.prots}g</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* جدول الأطعمة النباتية التي تحتوي على بروتين */}
          <h3 className={`table-title table-title-WG`}>Plant foods containing protein</h3>
          <table className={`prot-table prot-table-WG`}>
            <thead>
              <tr>
                <th>Food Source</th>
                <th>Quantity</th>
                <th>Protein (g)</th>
              </tr>
            </thead>
            <tbody>
              {plantProtsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.food}</td>
                  <td>100g</td>
                  <td>{item.prots}g</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* جدول مصادر البروتين من المكسرات والبذور */}
          <h3 className={`table-title table-title-WG`}>Protein sources from nuts and seeds</h3>
          <table className={`prot-table prot-table-WG`}>
            <thead>
              <tr>
                <th>Food Source</th>
                <th>Quantity</th>
                <th>Protein (g)</th>
              </tr>
            </thead>
            <tbody>
              {nutsSeedsProtsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.food}</td>
                  <td>100g</td>
                  <td>{item.prots}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
    if (section === 'Carbohydrates') {
      return (
        <>
          <ul>
            {items.map((item, index) => {
              if (item === 'Tips For Choosing Carbohydrates:') {
                return (
                  <li key={index} className={`no-bullet-left no-bullet-left-WG`}>
                    {renderTextWithHighlight(item, section)}
                  </li>
                );
              }
              return <li key={index}>{renderTextWithHighlight(item, section)}</li>;
            })}
          </ul>
          {/* جدول الكربوهيدرات */}
          <h3 className={`table-title table-title-WG`}>Carbohydrate Content in Common Foods</h3>
          <table className={`carb-table carb-table-WG`}>
            <thead>
              <tr>
                <th>Food Source</th>
                <th>Quantity</th>
                <th>Carbohydrates (g)</th>
              </tr>
            </thead>
            <tbody>
              {carbData.map((item, index) => (
                <tr key={index}>
                  <td>{item.food}</td>
                  <td>
                    {index === carbData.length - 1 ? '100ml' : '100g'}
                  </td>
                  <td>{item.carbs}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
    if (section === 'How To Calculate Calories') {
      return (
        <ul>
          {items.map((item, index) => {
            if (item === 'A meal containing:') {
              return (
                <li key={index} className={`no-bullet no-bullet-WG`}>
                  {renderTextWithHighlight(item, section)}
                  <ul>
                    {items.slice(index + 1, index + 4).map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </li>
              );
            }
            if (item === 'Calories:') {
              return (
                <li key={index} className={`no-bullet no-bullet-WG`}>
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
            return <li key={index}>{renderTextWithHighlight(item, section)}</li>;
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
    <div className={`main-content main-content-WG ${isMounted ? 'mounted mounted-WG' : ''}`}>
      <div className={`logo logo-WG`}></div>
      <aside className={`left-panel left-panel-WG`}>
        <h1>Weight Gain</h1>
        <div className={`button-row button-row-WG`}>
          <button
            className={`nav-button nav-button-WG ${activeSection === 'General Tips' ? 'active active-WG' : ''}`}
            onClick={() => setActiveSection('General Tips')}
          >
            General Tips
          </button>
          <button
            className={`nav-button nav-button-WG ${activeSection === 'Healthy Fats' ? 'active active-WG' : ''}`}
            onClick={() => setActiveSection('Healthy Fats')}
          >
            Healthy Fats
          </button>
        </div>
        <div className={`button-row button-row-WG`}>
          <button
            className={`nav-button nav-button-WG ${activeSection === 'Protein' ? 'active active-WG' : ''}`}
            onClick={() => setActiveSection('Protein')}
          >
            Protein
          </button>
          <button
            className={`nav-button nav-button-WG ${activeSection === 'Carbohydrates' ? 'active active-WG' : ''}`}
            onClick={() => setActiveSection('Carbohydrates')}
          >
            Carbohydrates
          </button>
        </div>
        <button
          className={`nav-button full-width nav-button-WG full-width-WG ${activeSection === 'How To Calculate Calories' ? 'active active-WG' : ''}`}
          onClick={() => setActiveSection('How To Calculate Calories')}
        >
          How To Calculate Calories
        </button>
        <button
          className={`nav-button full-width nav-button-WG full-width-WG ${activeSection === 'Carbohydrate Content In Common Foods' ? 'active active-WG' : ''}`}
          onClick={() => setActiveSection('Carbohydrate Content In Common Foods')}
        >
          Carbohydrate Content In Common Foods
        </button>
      </aside>

      {/* Right Panel */}
      <section className={`right-panel right-panel-WG`}>
        <h2>{sections[activeSection].title}</h2>
        <div className={`horizontal-line horizontal-line-WG`}></div>
        {renderList(sections[activeSection].items, activeSection)}
      </section>
    </div>
  );
};

export default WeightGain;