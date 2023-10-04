export default class GameState {
  constructor() {
    if (GameState.instance) {
      return GameState.instance;
    }
    this.gehalt = 0;
    this.passivesEinkommen = 0;
    this.gesammteAusgaben = 0;
    this.balance = 0;

    GameState.instance = this;
  }

  get GetCashflow() {
    return this.gehalt + this.passivesEinkommen - this.gesammteAusgaben;
  }

  CalculatePayday() {
    this.balance += this.GetCashflow;
  }
}
