import { IconStub, FlagStub } from '../../imports/constants';
import type { TripListDataModel } from '../../imports/models';

import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
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

export const TripListFlagStub: TripListFlagModel = {
  shell: { ...FlagStub }
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
