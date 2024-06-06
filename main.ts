import inquirer from "inquirer";

const currency: any = {
    USD: 1, // base currency
    EUR: 0.92,
    GPB: 0.79,
    INR: 83.28,
    PKR: 278,
};
let user_answer = await inquirer.prompt(
    [
        {
             name: "from",
             message: "enter from amount",
             type: "list",
             choices: ["USD","EUR","GPB","INR","PKR"]
          },
          {
             name: "to", 
             message: "enter to amount",
             type: "list",
             choices: ["USD","EUR","GPB","INR","PKR"]
          },
        {
            name: "amount",
            message: "enter tO amount",
            type: "number",
         },

    ]
)
 let fromAmount = currency [user_answer.from]
 let toAmount = currency [user_answer.to]
 let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);










