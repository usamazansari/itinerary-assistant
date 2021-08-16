import { IconStub } from '../../imports/models';

import type {
  HomeAssetModel,
  HomeAssetsModel,
  HomeVMModel
} from '../../models';

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
const HomeAssetsStub: HomeAssetsModel = {
  view: { ...HomeAssetStub },
  create: { ...HomeAssetStub }
};

/**
 * Stub for `HomeVMModel`
 *
 * ```ts
 * const HomeVMStub: HomeVMModel = {
 *   assets: HomeAssetsStub
 * }
 * ```
 */
export const HomeVMStub: HomeVMModel = {
  assets: { ...HomeAssetsStub }
};

/**
 * Constants for `home` Module
 *
 * ```ts
 * const Constants: {
 *   assets: TemporaryHomeAssetsModel;
 * }
 * ```
 */
export const Constants: HomeVMModel = {
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
