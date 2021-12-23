// TODO: Usama Ansari - ♻️ Refactor this file.

import type { Flag, Icon } from '../imports';

export interface TripListAssetsModel {
  // TODO: Add a button wrapper
  view: { icon: Icon; text: string; };
}

export interface TripListErrorModel {
  message: string;
}

export interface TripListFlagModel {
  shell: Flag;
}
