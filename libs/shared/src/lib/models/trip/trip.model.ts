export interface ExpenseModel {
  amount: number;
  currency: string;
}

export interface TenureModel {
  start: Date | string;
  end: Date | string;
}

export interface DayOverviewModel {
  date: Date | string;
  source: string;
  destination: string;
}
