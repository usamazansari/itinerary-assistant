interface ITripExpense {
  amount: number;
  currency: string;
}

const TripExpenseStub: ITripExpense = {
  amount: 0,
  currency: ''
};

export class TripExpense implements ITripExpense {
  amount: number;
  currency: string;

  constructor({
    amount = TripExpenseStub.amount,
    currency = TripExpenseStub.currency
  }: Partial<ITripExpense>) {
    this.amount = amount;
    this.currency = currency;
  }
}

interface ITripTenure {
  start: Date | string;
  end: Date | string;
}

const TripTenureStub: ITripTenure = {
  start: new Date(),
  end: new Date()
};

export class TripTenure implements ITripTenure {
  start: Date | string;
  end: Date | string;

  constructor({
    start = TripTenureStub.start,
    end = TripTenureStub.end
  }: Partial<ITripTenure>) {
    this.start = start;
    this.end = end;
  }
}

interface IDayOverview {
  date: Date | string;
  source: string;
  destination: string;
}

const DayOverviewStub: IDayOverview = {
  date: new Date(),
  source: '',
  destination: ''
};

export class DayOverview implements IDayOverview {
  date: Date | string;
  source: string;
  destination: string;

  constructor({
    date = DayOverviewStub.date,
    source = DayOverviewStub.source,
    destination = DayOverviewStub.destination
  }: Partial<IDayOverview>) {
    this.date = date;
    this.source = source;
    this.destination = destination;
  }
}
