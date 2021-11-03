// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface ExpenseModel
 */
export interface ExpenseModel {
  amount: number;
  currency: string;
}

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface TenureModel
 */
export interface TenureModel {
  start: Date | string;
  end: Date | string;
}

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface DayOverviewModel
 */
export interface DayOverviewModel {
  date: Date | string;
  source: string;
  destination: string;
}
