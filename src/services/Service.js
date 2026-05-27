const STORAGE_KEY = "expense_categories";

const defaultCategories = [

  {
    name: "Food",
    color: "#22c55e"
  },

  {
    name: "Travel",
    color: "#3b82f6"
  },

  {
    name: "Shopping",
    color: "#f97316"
  },

  {
    name: "Health & Wellness",
    color: "#8b5cf6"
  },

  {
    name: "Housing & Living",
    color: "#ef4444"
  },

  {
    name: "Others",
    color: "#6b7280"
  }

];

const availableColors = [

  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#f59e0b",
  "#14b8a6",
  "#a855f7",
  "#e11d48",
  "#0ea5e9",
  "#65a30d",
  "#d97706"

];

export function getCategories(){

  const categories =
    localStorage.getItem(
      STORAGE_KEY
    );

  return categories
    ? JSON.parse(categories)
    : defaultCategories;

}

export function saveCategories(categories){

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(categories)
  );

}

export function addCategory(name){

  const categories =
    getCategories();

  const exists =
    categories.find(
      category =>
      category.name.toLowerCase() ===
      name.toLowerCase()
    );

  if(exists){
    return categories;
  }

  const usedColors =
    categories.map(
      category => category.color
    );

  const color =
    availableColors.find(
      color =>
      !usedColors.includes(color)
    ) || "#000000";

  categories.push({
    name,
    color
  });

  saveCategories(
    categories
  );

  return categories;

}