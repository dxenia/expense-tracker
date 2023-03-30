const account = {
  name: "Dana",
  expenses: [],
  income: [],
  addExpenses: function () {
    const quantity = parseFloat(prompt("How much did you spend?"));
    if (quantity === "" || isNaN(quantity)) {
      alert("Not a valid input! Please add a number");
    } 
    const item = prompt("What did you spend money on? (Food, gas, bills, etc.)");
    this.expenses.push({ quantity, item });
    menu();
  },
  addIncome: function () {
    const amountIn = parseFloat(prompt("How much did you earn?"));
    if (amountIn === "" || isNaN(amountIn)) {
      alert("Not a valid input! Please add a number");
    } 
    this.income.push(amountIn);
    menu();
  },
  listAllExpenses: function () {
    this.expenses.forEach((expense) => {
      alert(`You spent ${expense.quantity} on ${expense.item}`);
    });
    menu();
  },
  getSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.quantity;
    });

    for (let i = 0; i < this.income.length; i++) {
      totalIncome += this.income[i];
    }

    alert(
      `Your total expenses are: ${totalExpenses}\nYour total income is: ${totalIncome}\nYour total balances are: ${
        totalIncome - totalExpenses}`
    );
    menu();
  },
};

// In the previous object we used prompt, both in combination with parseFloat and alone by itself. I learned from Helena
// that when used alone it returns a string, in comparison to it combined to parseFloat which returns a number. The purpose
// of parseFloat is in fact to take a string and return it into number. Using prompt in both cases has helped me define
// a more specific input the user has to take when using the application.

function menu() {
  const choice = parseFloat(
    prompt(`Hello ${account.name}! Welcome to your EXPENSE TRACKER.\nPlease pick one of the following options: 
    1) Add expenses
    2) Add income
    3) List all expenses
    4) Get summary`)
  );

  // I decided to use the if/else statements because I feel more comfortable using them instead of switch! No particular reason other
  // than personal preference and comfort :)

  if (choice === 1) {
    account.addExpenses();
  } else if (choice === 2) {
    account.addIncome()
  } else if (choice === 3) {
    account.listAllExpenses(account.expenses.quantity);
  } else if (choice === 4) {
    account.getSummary();
  } else if (choice > 4 || typeof choice !== "number") {
    alert("Not a valid input! Please select a number between 1 and 4.");
    menu();
  }
}

menu();
