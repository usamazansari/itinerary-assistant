import { IconStub } from '../../imports/constants';

import type {
  TripListAssetsModel,
  TripListDataModel,
  TripListErrorModel
} from '../../models';

export const TripListAssetsStub: TripListAssetsModel = {
  view: {
    icon: { ...IconStub },
    text: ''
  }
};

export const TripListDataStub: TripListDataModel = {
  trips: []
};

export const TripListErrorStub: TripListErrorModel = {
  message: ''
};

export const Constants: {
  assets: TripListAssetsModel;
  data: TripListDataModel;
  error: TripListErrorModel;
} = {
  assets: {
    view: {
      icon: {
        name: 'eye', style: 'fas'
      },
      text: 'View'
    }
  },
  data: {
    trips: []
  },
  error: { ...TripListErrorStub }
};
