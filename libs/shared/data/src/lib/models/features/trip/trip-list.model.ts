import { TripExpense, TripTenure } from '.';

/**
 * Trip List Item Model.
 *
 * ```ts
 * interface ITripListItem {
 *   expense : TripExpense;
 *   rating  : number;
 *   title   : string;
 *   tenure  : TripTenure;
 * }
 * ```
 *
 * @interface ITripListItem
 */
interface ITripListItem {
  /**
   * Expense of a Trip.
   *
   * @type {TripExpense}
   * @memberof ITripListItem
   */
  expense: TripExpense;

  /**
   * Rating of a Trip.
   *
   * @type {number}
   * @memberof ITripListItem
   */
  rating: number;

  /**
   * Title of a Trip.
   *
   * @type {string}
   * @memberof ITripListItem
   */
  title: string;

  /**
   * Tenure of a Trip.
   *
   * @type {TripTenure}
   * @memberof ITripListItem
   */
  tenure: TripTenure;
}

/**
 * Stub for Trip List Item.
 *
 * ```ts
 * const TripListItemStub: ITripListItem = {
 *   expense : new TripExpense(),
 *   rating  : 0,
 *   tenure  : new TripTenure(),
 *   title   : ''
 * }
 * ```
 */
const TripListItemStub: ITripListItem = {
  expense: new TripExpense({}),
  rating: 0,
  tenure: new TripTenure({}),
  title: ''
};

/**
 * Trip List Item class.
 *
 * @export
 * @class TripListItem
 * @implements {ITripListItem}
 */
export class TripListItem implements ITripListItem {
  expense: TripExpense;
  rating: number;
  title: string;
  tenure: TripTenure;

  /**
   * ### Trip List Item
   *
   * Creates an instance of TripListItem.
   *
   * ```ts
   * const tripListItem = new TripListItem({
   *   expense : new TripExpense(),
   *   rating  : 0,
   *   tenure  : new TripTenure(),
   *   title   : ''
   * });
   * ```
   *
   * @param {Partial<ITripListItem>} [{}]
   * @memberof TripListItem
   */
  constructor({
    expense = TripListItemStub.expense,
    rating = TripListItemStub.rating,
    title = TripListItemStub.title,
    tenure = TripListItemStub.tenure
  }: Partial<ITripListItem>) {
    this.expense = expense;
    this.rating = rating;
    this.title = title;
    this.tenure = tenure;
  }
}
