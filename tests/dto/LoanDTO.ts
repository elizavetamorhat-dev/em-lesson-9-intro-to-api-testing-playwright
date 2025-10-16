import { expect } from "@playwright/test";

export class LoanDTO {
  income: number;
  debt: number;
  age: number;
  employed: boolean;
  loanAmount: number;
  loanPeriod: number;

  private constructor(
    income: number,
    debt: number,
    age: number,
    employed: boolean,
    loanAmount: number,
    loanPeriod: number,
  ) {
    this.income = income;
    this.debt = debt;
    this.age = age;
    this.employed = employed;
    this.loanAmount = loanAmount;
    this.loanPeriod = loanPeriod;
  }
  static checkServerResponse(data: LoanDTO): void {
    expect.soft(data.income).toBeGreaterThan(0);
    expect.soft(data.debt).toBeGreaterThanOrEqual(0);
    expect.soft(data.age).toBeGreaterThanOrEqual(17);
    expect.soft(typeof data.employed).toBe("boolean");
    expect.soft(data.loanAmount).toBeGreaterThan(0);
    expect.soft(data.loanPeriod).toBeGreaterThan(0);
  }
  static highRisk(): LoanDTO {
    return new LoanDTO(900, 6500, 18, true, 8000, 3);
  }
  static mediumRisk(): LoanDTO {
    return new LoanDTO(6000, 2000, 30, true, 5000, 9);
  }
  static lowRisk(): LoanDTO {
    return new LoanDTO(10000, 500, 40, true, 2000, 12);
  }
}