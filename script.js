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

function menu() {
  const choice = parseFloat(
    prompt(`Hello ${account.name}! Welcome to your EXPENSE TRACKER.\nPlease pick one of the following options: 
    1) Add expenses
    2) Add income
    3) List all expenses
    4) Get summary`)
  );

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
