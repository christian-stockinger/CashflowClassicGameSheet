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

    GameState.instance = this;
  }

  get passivIncome(){
    let total = 0;
    for (const property of this.immobileAndCompanies) {
      total += property.cashflow;
    }
    return Number(this.interest) + total;
  }

  get totalExpenses(){
    return 0;
  }

  get cashflow() {
    return Number(this.income) + Number(this.passivIncome) - Number(this.totalExpenses);
  }

  CalculatePayday() {
    this.balance += this.cashflow;
  }
}
