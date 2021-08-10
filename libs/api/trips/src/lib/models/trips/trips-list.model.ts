import { ExpenseModel, TenureModel } from '../';

export interface TripModel {
  expense: ExpenseModel;
  rating: number;
  title: string;
  tenure: TenureModel;
}
