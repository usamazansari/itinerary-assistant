import { TripListItemModel, IconModel } from '../../imports/models';

export interface TripListAssetsModel {
  // TODO: Add a button wrapper
  view: { icon: IconModel; text: string; };
}

export interface TripListDataModel {
  trips: TripListItemModel[];
}

export interface TripListErrorModel {
  message: string;
}
