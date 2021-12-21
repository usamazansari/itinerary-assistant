import type { ExpenseModel, TenureModel } from './trip.model';

// TODO: 🧐 Documentation required
/**
 * TODO: 🧐 Documentation required
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

// TODO: 🧐 Documentation required
// TODO: 🚚 Move to feature/trips/components/trip-list/model since it is not shared between frontend and backend
/**
 * TODO: 🧐 Documentation required
 *
 * @export
 * @interface TripListDataModel
 */
export interface TripListDataModel {
  trips: TripListItemModel[];
}
