import { ExpenseModel, TenureModel } from './trip.model';

export interface TripModel {
  expense: ExpenseModel;
  rating: number;
  title: string;
  tenure: TenureModel;
}
