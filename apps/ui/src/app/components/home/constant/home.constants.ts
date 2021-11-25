import { IconStub } from '../imports';

import type { HomeAssetModel, HomeAssetsModel } from '..';

/**
 * Stub for `HomeAssetModel`.
 *
 * ```ts
 * const HomeAssetStub: HomeAssetModel = {
 *   icon : IconStub,
 *   text : null
 * };
 * ```
 */
const HomeAssetStub: HomeAssetModel = {
  icon: { ...IconStub },
  text: ''
};

/**
 * Stub for `HomeAssetsModel`.
 *
 * ```ts
 * const HomeAssetsStub: HomeAssetsModel = {
 *   view   : {
 *     icon : IconStub,
 *     text : ''
 *   },
 *   create : {
 *     icon : IconStub,
 *     text : ''
 *   }
 * }
 * ```
 */
export const HomeAssetsStub: HomeAssetsModel = {
  view: { ...HomeAssetStub },
  create: { ...HomeAssetStub }
};

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
export const HomeAssets: HomeAssetsModel = {
  view: {
    icon: { name: 'hiking', style: 'fas' },
    text: 'View All Trips'
  },
  create: {
    icon: { name: 'map-marked-alt', style: 'fas' },
    text: 'Create a New Trip'
  }
};
