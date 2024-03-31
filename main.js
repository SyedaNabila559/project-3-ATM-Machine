#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    let myBalance = 50000;
    let myPin = 1234;
    // Welcome message
    console.log(chalk.yellow("\n \tWelcome to code with Nabila - ATM Machine\n"));
    let pinAns = await inquirer.prompt([
        {
            name: "pincode",
            type: "number",
            message: chalk.blue("Enter your pin")
        }
    ]);
    if (pinAns.pincode === myPin) {
        console.log("welcome  to your account");
        let userAns = await inquirer.prompt([
            {
                name: "user",
                type: "list",
                message: "Select an option:",
                choices: ["Check Balance", "withdraw", "fast cash"]
            }
        ]);
        if (userAns.user === "Check Balance") {
            console.log(chalk.bold(`your current balance is ${myBalance}`));
        }
        else if (userAns.user === "withdraw") {
            let withdrawAmount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "How much would you like to withdraw?"
                }
            ]);
            // myBalance -= withdrawAmount.withdrawAmount
            if (withdrawAmount.amount > myBalance) {
                console.log(chalk.red("Insufficent Fund"));
                //   console.log(`your remaining balance is ${myBalance}`)
            }
            else {
                myBalance -= withdrawAmount.amount,
                    console.log(chalk.bgGray(`Your remaning balance ${myBalance}`));
            }
        }
        else if (userAns.answer === "fast cash") {
            let cashAmount = await inquirer.prompt([
                {
                    name: "cash",
                    type: "list",
                    message: "choose your amount",
                    choices: ["1000", "2000", "3000", "10000"]
                }
            ]);
            if (cashAmount.cash === "1000") {
                myBalance -= cashAmount.cash;
                console.log(chalk.bind(`Your remaning balance ${myBalance}`));
            }
            else if (cashAmount.cash === "2000") {
                myBalance -= cashAmount.cash;
                console.log(chalk.bgBlackBright(`Your remaning balance ${myBalance}`));
            }
            else if (cashAmount.cash === "3000") {
                myBalance -= cashAmount.cash;
                console.log(chalk.bgGray(`Your remaning balance ${myBalance}`));
            }
            else if (cashAmount.cash === "10000") {
                myBalance -= cashAmount.cash;
                console.log(chalk.magenta(`Your remaning balance ${myBalance}`));
            }
        }
    }
    else {
        console.log(chalk.red("Invalid Password"));
    }
}
main();
