import { Icon } from '../imports';
import { HomeAsset, HomeAssets } from '..';

/**
 * Home Page Assets
 *
 * ```ts
 * const HomeAssets: HomeAssetsModel = {
 *   view: {
 *     icon: { name: 'hiking', style: 'fas' },
 *     text: 'View All Trips'
 *   },
 *   create: {
 *     icon: { name: 'map-marked-alt', style: 'fas' },
 *     text: 'Create a New Trip'
 *   }
 * }
 * ```
 */
export const Assets: HomeAssets = new HomeAssets({
  view: new HomeAsset({
    icon: new Icon({
      style: 'fas',
      name: 'hiking'
    }),
    text: 'View Trip'
  }),
  create: new HomeAsset({
    icon: new Icon({
      style: 'fas',
      name: 'map-marked-alt'
    }),
    text: 'Create Trip'
  })
});
