import { ExpenseModel, TenureModel } from './trip.model';

// TODO: 🧐 Documentation required
// TODO: Rename as `TripListItemModel`
/**
 *
 *
 * @export
 * @interface TripModel
 */
export interface TripModel {
  expense: ExpenseModel;
  rating: number;
  title: string;
  tenure: TenureModel;
}
