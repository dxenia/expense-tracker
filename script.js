
const account = {
  name: "Dana",
  expenses: [],
  income: [],
  addExpenses: function (quantity, item) {
    this.expenses.push(quantity, item);
    return this.expenses;
  },
  addIncome: function (amountIn) {
    this.income.push(amountIn);
    return this.income;
  },
  listAllExpenses: function (quantity, item) {
    alert(`You spent ${quantity} on ${item}`);
    /*let listExpenses = "This is the list of expenses: \n";
    for (let i = 0; i < arr.length - 1; i++) {
      listExpenses += `${arr[i]}, \n`;
    }
    alert(listExpenses);*/
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
    const quantity = parseFloat(prompt("How much did you spend?"));
    const item = parseFloat(prompt("What did you spend money on? (Food, gas, bills, etc.)"));

    if (/*typeof quantity === "number" &&*/ quantity > 0 /*&& typeof item === "string"*/) {
      account.addExpenses(quantity, item);
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
    account.expenses.forEach(account.listAllExpenses);
    menu();
  } else if (choice === 4) {
    account.getSummary()
    menu();
  } else if (choice > 4 || typeof choice !== "number") {
    alert("Not a valid input.")
  }
}

menu();
