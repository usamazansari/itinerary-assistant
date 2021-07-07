import { TemporaryHomeAssetsModel } from '@home/models/temporary-home/temporary-home.model';

/**
 * Constants for `home` Module
 * 
 * ```ts
 * const Constants: {
 *   assets: TemporaryHomeAssetsModel;
 * }
 * ```
 */
export const Constants: {
  assets: TemporaryHomeAssetsModel;
} = {
  assets: {
    view: {
      icon: { name: 'hiking', style: 'fas' },
      text: 'View All Trips'
    },
    create: {
      icon: { name: 'map-marked-alt', style: 'fas' },
      text: 'Create a New Trip'
    }
  }
};
