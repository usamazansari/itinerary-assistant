import { Button, Flag, TripListItem } from '../imports';

interface ITripListAssets {
  view: Button;
}

const TripListAssetsStub: ITripListAssets = {
  view: new Button()
};

export class TripListAssets implements ITripListAssets {
  view: Button;

  constructor(
    init: Partial<ITripListAssets> = TripListAssetsStub
  ) {
    this.view = init.view ?? TripListAssetsStub.view;
  }
}

interface ITripListError {
  message: string;
}

const TripListErrorStub: ITripListError = {
  message: ''
};

export class TripListError implements ITripListError {
  message: string;

  constructor(
    init: Partial<ITripListError> = TripListErrorStub
  ) {
    this.message = init.message ?? TripListErrorStub.message;
  }
}

interface ITripListFlags {
  shell: Flag;
}

const TripListFlagStub: ITripListFlags = {
  shell: new Flag()
};

export class TripListFlags implements ITripListFlags {
  shell: Flag;

  constructor(
    init: Partial<ITripListFlags> = TripListFlagStub
  ) {
    this.shell = init.shell ?? TripListFlagStub.shell;
  }
}

interface ITripListData {
  trips: TripListItem[];
}

const TripListDataStub: ITripListData = {
  trips: []
};

export class TripListData implements ITripListData {
  trips: TripListItem[];

  constructor(
    init: Partial<ITripListData> = TripListDataStub
  ) {
    this.trips = init.trips ?? TripListDataStub.trips;
  }
}
