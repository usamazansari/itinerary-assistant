export interface TripModel {
  expense: ExpenseModel;
  rating: number;
  title: string;
  tenure: TenureModel;
}

interface ExpenseModel {
  amount: number;
  currency: string;
}

interface TenureModel {
  start: Date | string;
  end: Date | string;
}
