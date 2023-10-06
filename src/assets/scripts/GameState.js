export default class GameState {
  constructor() {
    if (GameState.instance) {
      return GameState.instance;
    }
    this.income = 0;
    this.balance = 0;
    this.immobileAndCompanies = [];
    this.stocks = [];
    this.interest = 0;
    this.savings = 0;
    this.metal = 0;
    this.tax = 0;
    this.bafoeg = 0;
    this.bafoegRate = 0;
    this.carCredit = 0;
    this.carCreditRate = 0;
    this.creditCardPayment = 0;
    this.creditCardPaymentRate = 0;
    this.otherExpenses = 0;
    this.ChildCost = 0;
    this.ChildAmount = 0;
    this.bankPayment = 0;

    GameState.instance = this;
  }

  get passivIncome(){
    let total = 0;
    for (const property of this.immobileAndCompanies) {
      total += property.cashflow;
    }
    return Number(this.interest) + Number(total);
  }

  get totalExpenses(){
    return Number(this.tax) +
      Number(this.morgagePayment) +
      Number(this.bafoegRate) +
      Number(this.carCreditRate) +
      Number(this.creditCardPaymentRate) +
      Number(this.bankLoanPayments) +
      Number(this.otherExpenses) +
      (Number(this.ChildCost) * Number(this.ChildAmount));
  }

  get completeMortgage(){
    let total = 0;
    for (const property of this.immobileAndCompanies) {
      total += property.mortage;
    }
    return total;
  }

  get bankLoanPayments() {
    return Number(this.bankPayment) * 0.1;
  }

  get morgagePayment(){
    return Number(this.completeMortgage) * 0.01;
  }

  get cashflow() {
    return Number(this.income) + Number(this.passivIncome) - Number(this.totalExpenses);
  }

  CalculatePayday() {
    this.balance += this.cashflow;
  }
}
