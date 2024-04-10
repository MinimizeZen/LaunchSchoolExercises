function createUtilitiesAccount() {
  let payments = [];
  let electricUsage = [];
  let currentBalance = 0;
  let transactionId = 0;

  return {
    getTransactionId() {
      transactionId += 1;
      return transactionId;
    },

    getBalance() {
      return currentBalance;
    },

    makePayment(amount) {
      currentBalance -= amount;
      payments.push([this.getTransactionId(), amount]);
    },

    addUsage(usageAmount) {
      currentBalance += usageAmount * 0.25;
      electricUsage.push([this.getTransactionId(), usageAmount]);
    },

    getPayments() {
      return JSON.parse(JSON.stringify(payments));
    },

    getUsage() {
      return JSON.parse(JSON.stringify(electricUsage));
    },
  };
}
let pay = createUtilitiesAccount();
pay.addUsage(100);
pay.addUsage(200);
pay.makePayment(50);
pay.makePayment(50);
pay.makePayment(200);
console.log(pay.getPayments());
console.log(pay.getUsage());
