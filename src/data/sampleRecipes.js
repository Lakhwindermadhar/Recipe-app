const sampleRecipes = [
  {
    id: 1,
    title: "Biryani",
    readyIn: "60 minutes",
    chef: "Sanjeev Kapoor",
    safe: true,
    description: "Fragrant rice layered with spiced meat or vegetables.",
    instructions: {
      steps: [
        "Step 1: Cook basmati rice with whole spices.",
        "Step 2: Prepare spicy meat or vegetable gravy.",
        "Step 3: Layer rice and gravy in a pot.",
        "Step 4: Dum cook on low flame until flavors blend."
      ]
    }
  },
  {
    id: 2,
    title: "Butter Chicken",
    readyIn: "45 minutes",
    chef: "Kunal Kapur",
    safe: true,
    description: "Creamy tomato-based chicken curry.",
    instructions: {
      steps: [
        "Step 1: Marinate and grill chicken.",
        "Step 2: Cook onion-tomato gravy with butter and cream.",
        "Step 3: Add grilled chicken and simmer.",
        "Step 4: Serve hot with naan or rice."
      ]
    }
  },
  {
    id: 3,
    title: "Rajma",
    readyIn: "60 minutes",
    chef: "Kunal Kapur",
    safe: true,
    description: "Rich and hearty North Indian kidney bean curry.",
    instructions: {
      steps: [
        "Step 1: Soak and boil rajma beans.",
        "Step 2: Sauté onions, tomatoes, garlic, and spices.",
        "Step 3: Add beans and simmer with masala.",
        "Step 4: Garnish with coriander and serve with rice."
      ]
    }
  },
  {
    id: 4,
    title: "Jeera Rice",
    readyIn: "20 minutes",
    chef: "Tarla Dalal",
    safe: true,
    description: "Aromatic cumin-flavored rice.",
    instructions: {
      steps: [
        "Step 1: Wash and soak rice.",
        "Step 2: Heat ghee, add cumin seeds.",
        "Step 3: Add rice and sauté for a minute.",
        "Step 4: Add water and cook until done."
      ]
    }
  },
  {
    id: 5,
    title: "Maggi Noodles",
    readyIn: "5 minutes",
    chef: "Home Style",
    safe: true,
    description: "Instant noodles with a delicious twist.",
    instructions: {
      steps: [
        "Step 1: Boil water in a pan.",
        "Step 2: Add Maggi noodles and tastemaker.",
        "Step 3: Cook for 2-3 minutes while stirring.",
        "Step 4: Serve hot with optional veggies."
      ]
    }
  },
  {
    id: 6,
    title: "Chicken",
    readyIn: "40 minutes",
    chef: "Gordon Ramsay",
    safe: true,
    description: "Juicy chicken with herbs and spices.",
    instructions: {
      steps: [
        "Step 1: Marinate chicken with spices.",
        "Step 2: Pan-sear or roast until cooked.",
        "Step 3: Serve with sauce or veggies."
      ]
    }
  },
  {
    id: 7,
    title: "Rogan Josh",
    readyIn: "90 minutes",
    chef: "Sanjeev Kapoor",
    safe: true,
    description: "Spicy Kashmiri lamb curry.",
    instructions: {
      steps: [
        "Step 1: Marinate lamb with yogurt and spices.",
        "Step 2: Slow-cook until tender.",
        "Step 3: Serve with naan or rice."
      ]
    }
  },
  {
    id: 8,
    title: "Chole Bhature",
    readyIn: "60 minutes",
    chef: "Ranveer Brar",
    safe: true,
    description: "Punjabi chickpea curry with fluffy bread.",
    instructions: {
      steps: [
        "Step 1: Cook chickpeas with masala.",
        "Step 2: Knead and deep-fry bhature.",
        "Step 3: Serve hot together."
      ]
    }
  },
  {
    id: 9,
    title: "Paneer Butter Masala",
    readyIn: "35 minutes",
    chef: "Vikas Khanna",
    safe: true,
    description: "Creamy tomato curry with paneer.",
    instructions: {
      steps: [
        "Step 1: Sauté onions, tomatoes, and spices.",
        "Step 2: Add paneer and simmer.",
        "Step 3: Finish with cream and butter."
      ]
    }
  },
  {
    id: 10,
    title: "Palak Paneer",
    readyIn: "30 minutes",
    chef: "Tarla Dalal",
    safe: true,
    description: "Spinach and cottage cheese curry.",
    instructions: {
      steps: [
        "Step 1: Blanch spinach and blend.",
        "Step 2: Cook with paneer and spices.",
        "Step 3: Serve hot with rice or roti."
      ]
    }
  },
  {
    id: 11,
    title: "Chicken Tikka Masala",
    readyIn: "50 minutes",
    chef: "Gordon Ramsay",
    safe: true,
    description: "Charred chicken in creamy spiced sauce.",
    instructions: {
      steps: [
        "Step 1: Grill marinated chicken.",
        "Step 2: Prepare masala gravy.",
        "Step 3: Combine and simmer."
      ]
    }
  },
  {
    id: 12,
    title: "Tandoori Chicken",
    readyIn: "45 minutes",
    chef: "Kunal Kapur",
    safe: true,
    description: "Spiced yogurt-marinated grilled chicken.",
    instructions: {
      steps: [
        "Step 1: Marinate chicken with tandoori spices.",
        "Step 2: Grill or bake until cooked.",
        "Step 3: Serve with lemon and onions."
      ]
    }
  },
  {
    id: 13,
    title: "Dal Makhani",
    readyIn: "90 minutes",
    chef: "Sanjeev Kapoor",
    safe: true,
    description: "Creamy black lentils slow-cooked with butter.",
    instructions: {
      steps: [
        "Step 1: Soak and boil dal.",
        "Step 2: Sauté with spices and butter.",
        "Step 3: Simmer with cream."
      ]
    }
  },
  {
    id: 14,
    title: "Aloo Gobi",
    readyIn: "35 minutes",
    chef: "Vikas Khanna",
    safe: true,
    description: "Potato and cauliflower dry curry.",
    instructions: {
      steps: [
        "Step 1: Chop and sauté vegetables.",
        "Step 2: Add spices and cook till soft.",
        "Step 3: Garnish with coriander."
      ]
    }
  },
  {
    id: 15,
    title: "Samosa",
    readyIn: "60 minutes",
    chef: "Tarla Dalal",
    safe: true,
    description: "Crispy stuffed pastry snack.",
    instructions: {
      steps: [
        "Step 1: Prepare spicy potato filling.",
        "Step 2: Make dough and shape samosas.",
        "Step 3: Deep-fry until golden brown."
      ]
    }
  },
  {
    id: 16,
    title: "Dosa",
    readyIn: "20 minutes",
    chef: "Ranveer Brar",
    safe: true,
    description: "Crispy South Indian rice crepe.",
    instructions: {
      steps: [
        "Step 1: Prepare and ferment batter.",
        "Step 2: Spread on hot tawa.",
        "Step 3: Cook until golden and crispy."
      ]
    }
  },
  {
    id: 17,
    title: "Idli",
    readyIn: "30 minutes",
    chef: "Sanjeev Kapoor",
    safe: true,
    description: "Steamed rice cakes.",
    instructions: {
      steps: [
        "Step 1: Prepare and ferment batter.",
        "Step 2: Steam in idli stand.",
        "Step 3: Serve with chutney and sambar."
      ]
    }
  },
  {
    id: 18,
    title: "Vada",
    readyIn: "35 minutes",
    chef: "Vikas Khanna",
    safe: true,
    description: "Fried savory lentil donuts.",
    instructions: {
      steps: [
        "Step 1: Soak and grind lentils.",
        "Step 2: Shape into vadas.",
        "Step 3: Deep-fry until crispy."
      ]
    }
  }
];

export default sampleRecipes;
