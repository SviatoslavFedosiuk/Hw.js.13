// // 1
1
const user = {
    hobby: "swimming",
    premium: true,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const { hobby, premium, mood } = user;
console.log(hobby);
console.log(premium);
console.log(mood);
const k = Object.keys(user);
for (const i of k) {
    console.log(i, user[i]);
    
}

2
const objA = {
    hob: "swimming",
    prem: true,
    vibe: "happy",
    age: 36,
}
const { hob, prem, vibe, age } = objA;
console.log(hob);
console.log(prem);
console.log(vibe);
console.log(age);
const countProps = (obj) => {
    let key = Object.keys(obj);
    return key.length
}
console.log(countProps(objA));

// 3
const employee = {
    Vlad: 43,
    Maks: 34,
    Rostik: 25,
    Nazar: 45,
}
const { Vlad, Maks, Rostik, Nazar } = employee;
console.log(Vlad);
console.log(Maks);
console.log(Rostik);
console.log(Nazar);
function findBestEmployee(employee) {
    let bestName = "";
    let maxTasks = 0;
    const entries = Object.entries(employee);
    console.log(entries);
    for (const a of entries) {
        if (a[1]>maxTasks) {
            maxTasks = a[1];
            bestName = a[0]
        }
    }
    return `${bestName}: ${maxTasks}`
}
console.log(findBestEmployee(employee));

// 4
const employees = {
    Vlads: 30000,
    Makss: 30000,
    Rostiks: 30000,
    Nazars: 30000,
}
const { Vlads, Makss, Rostiks, Nazars } = employees;
console.log(Vlads);
console.log(Makss);
console.log(Rostiks);
console.log(Nazars);
function countTotalSalary(employees) {
    let conclusion = 0;
    const ent = Object.entries(employees)
    console.log(ent);
    
    for (const salary of ent) {
        conclusion += salary[1];
    }
    return ` ${conclusion}`
}
console.log(countTotalSalary(employees));

// 5
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 }
];
const [first, second, third, fourth] = products;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
function getAllPropValues(arr, prop) {
    const result = [];
    for (const objc of arr) {
        for (const [key, value] of Object.entries(objc)) {
            if (key === prop) {
                result.push(value)
            }
        }
    }
    return result
    
}
console.log(getAllPropValues(products, "name"));



// 6

const  product = [
     { nameProduct: "Radar",   priceProduct: 1300,  },
     { nameProduct: "Scanner", priceProduct: 2700,  },
     { nameProduct: "Droid",   priceProduct: 400,   },
     { nameProduct: "Grip",    priceProduct: 1200,  }
];
const [firsts, seconds, thirds, fourths] = product;
console.log(firsts);
console.log(seconds);
console.log(thirds);
console.log(fourths);
 function calculateTotalPrice(amount, productName) {
    for (const produc of product) {
        for (const [key, value] of Object.entries(produc)) {
            
            if (key === "nameProduct" && value === productName) {
                for (const [k, v] of Object.entries(produc)) {
                    if (k === "priceProduct") {
                        const total = v * amount;
                        return `${productName} - ${total}`;
                    }
                }
            }
        }
    }
    return "Product not found";
}

console.log(calculateTotalPrice(4, "Droid"));
 

// // // 2
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const account = {
  balance: 0,


  transactions: [],
  id: 1,

  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: this.id,
    };
    this.id += 1;
    return transaction;
  },
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount,Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття такої суми не можливо, недостатньо коштів");
      return;
    }
    else{
      this.balance -=amount;
      const transaction = this.createTransaction(amount,Transaction.WITHDRAW);
      this.transactions.push(transaction);
    }
  },
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
      else{
          return `Транзкації; ${id} не існує`;
      }
      }
    }
,
  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type){
    let sum = 0;
    for (const el of this.transactions) {
      if (el.type === type) {
        sum += el.amount;
        return sum;
      }
    }
  },
};
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(1000);
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account);