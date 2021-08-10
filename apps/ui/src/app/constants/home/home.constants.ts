import { HomeAssetsModel } from '../../models/home/home.model';

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
  assets: HomeAssetsModel;
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
