import { ExpenseModel, TenureModel } from './trip.model';

// TODO: 🧐 Documentation required
/**
 *
 *
 * @export
 * @interface TripListItemModel
 */
export interface TripListItemModel {
  expense: ExpenseModel;
  rating: number;
  title: string;
  tenure: TenureModel;
}
