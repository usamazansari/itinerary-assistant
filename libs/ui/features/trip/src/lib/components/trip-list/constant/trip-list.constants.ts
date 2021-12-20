import { IconStub, FlagStub } from '../imports';
import type { TripListDataModel } from '../imports';

import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '..';

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 */
export const TripListAssetsStub: TripListAssetsModel = {
  view: {
    icon: { ...IconStub },
    text: ''
  }
};

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 */
export const TripListDataStub: TripListDataModel = {
  trips: []
};

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 */
export const TripListFlagStub: TripListFlagModel = {
  shell: { ...FlagStub }
};

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 */
export const TripListErrorStub: TripListErrorModel = {
  message: ''
};

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 */
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
