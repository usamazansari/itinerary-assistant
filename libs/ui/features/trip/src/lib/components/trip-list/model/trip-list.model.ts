import type { Flag, IconModel } from '../imports';

export interface TripListAssetsModel {
  // TODO: Add a button wrapper
  view: { icon: IconModel; text: string; };
}

export interface TripListErrorModel {
  message: string;
}

export interface TripListFlagModel {
  shell: Flag;
}
