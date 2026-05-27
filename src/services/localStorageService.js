const BALANCE_KEY = "expense_balance";
const EXPENSES_KEY = "expense_expenses";
const CATEGORY_COLORS_KEY = "expense_category_colors";

/* -------------------------
   Balance
------------------------- */

export function saveBalance(balance){

  localStorage.setItem(
    BALANCE_KEY,
    JSON.stringify(balance)
  );

}

export function getBalance(){

  const balance =
    localStorage.getItem(
      BALANCE_KEY
    );

  return balance
    ? JSON.parse(balance)
    : 0;

}

/* -------------------------
   Expenses
------------------------- */

export function saveExpenses(expenses){

  localStorage.setItem(
    EXPENSES_KEY,
    JSON.stringify(expenses)
  );

}

export function getExpenses(){

  const expenses =
    localStorage.getItem(
      EXPENSES_KEY
    );

  return expenses
    ? JSON.parse(expenses)
    : [];

}

/* -------------------------
   Category Colors
------------------------- */

export function saveCategoryColors(colors){

  localStorage.setItem(
    CATEGORY_COLORS_KEY,
    JSON.stringify(colors)
  );

}

export function getCategoryColors(){

  const colors =
    localStorage.getItem(
      CATEGORY_COLORS_KEY
    );

  return colors
    ? JSON.parse(colors)
    : {};

}

/* -------------------------
   Clear All
------------------------- */

export function clearData(){

  localStorage.removeItem(
    BALANCE_KEY
  );

  localStorage.removeItem(
    EXPENSES_KEY
  );

  localStorage.removeItem(
    CATEGORY_COLORS_KEY
  );

}