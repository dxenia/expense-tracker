
const account = {
  name: "Dana",
  expenses: [],
  income: [],
  addExpenses: function (amountOut) {
    this.expenses.push(amountOut);
    return this.expenses;
  },
  addIncome: function (amountIn) {
    this.income.push(amountIn);
    return this.income;
  },
  listAllExpenses: function (expenses) {
    let listExpenses = "List of your expenses:\n";
    for (let i = 0; i < this.expenses.length; i++) {
      listExpenses += `${this.expenses[i]}, `;
    }
    return listExpenses;
  },
  totExpenses: function () {
    let totalExpenses = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      totalExpenses += this.expenses[i];
    }
    return totalExpenses;
  },
  totIncome: function () {
    let totalIncome = 0;
    for (let i = 0; i < this.income.length; i++) {
      totalIncome += this.income[i];
    }
    return totalIncome;
  },
  getSummary: function () {
    alert(`Your total expenses are: ${this.totExpenses()}\nYour total income is: ${this.totIncome()}\nYour total balances are: ${this.totIncome() - this.totExpenses()}`);
  }
}

function menu() {
  const choice = parseFloat(prompt(`Hello ${account.name}! Welcome to your EXPENSE TRACKER.\nPlease pick one of the following options: 
  1) Add expenses
  2) Add income
  3) List all expenses
  4) Get summary`));
  
  if (choice === 1) {
    const amountOut = parseFloat(prompt("How much did you spend?"));
    const amountOutItem = parseFloat(prompt("What did you spend money on? (Food, gas, bills, etc.)"))
    if (amountOut > 0 && amountOut === "number" && amountOutItem === "string") {
      account.addExpenses(amountOut);
      account.addExpenses(amountOutItem);
      menu();
    } else {
      alert("Not a valid input.");
      menu();
    }
  } else if (choice === 2) {
    const amountIn = parseFloat(prompt("How much did you earn?")); 
    if (typeof amountIn === "number" && amountIn > 0) {
      account.addIncome(amountIn);
      menu();
    } else {
      alert("Not a valid input.");
      menu();
    }
  } else if (choice === 3) {
    account.listAllExpenses()
    menu();
  } else if (choice === 4) {
    account.getSummary()
    menu();
  } else if (choice > 4 || typeof choice !== "number") {
    alert("Not a valid input.")
  }
}

menu();
