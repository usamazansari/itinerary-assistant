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

  constructor(init: Partial<ITripExpense> = { ...TripExpenseStub }) {
    this.amount = init.amount ?? TripExpenseStub.amount;
    this.currency = init.currency ?? TripExpenseStub.currency;
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

  constructor(init: Partial<ITripTenure> = { ...TripTenureStub }) {
    this.start = init.start ?? TripTenureStub.start;
    this.end = init.end ?? TripTenureStub.end;
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

  constructor(init: Partial<IDayOverview> = { ...DayOverviewStub }) {
    this.date = init.date ?? DayOverviewStub.date;
    this.source = init.source ?? DayOverviewStub.source;
    this.destination = init.destination ?? DayOverviewStub.destination;
  }
}
