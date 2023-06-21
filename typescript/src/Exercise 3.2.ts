const bankAccount = {
    money:0,
    deposit(value: number, message?: string): void {
        this.money += value;
        if (message) {
            console.log(message);
        } 
    },
};

bankAccount.deposit(100);
bankAccount.deposit(500, "Deposit received");

console.log("[Exercise 3.2]", `Account value : $${bankAccount.money}`);