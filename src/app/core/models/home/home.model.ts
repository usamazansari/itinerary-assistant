import { DEFAULT_IA_ICON, IaCoreIconModel } from '@core/models/core.model';

/**
 * TODO: 🧐 Documentation Required
 *
 * @interface IaCoreHomeAssetModel
 */
interface IaCoreHomeAssetModel {
  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {IaCoreIconModel}
   * @memberof IaCoreHomeAssetModel
   */
  icon: IaCoreIconModel;

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {(string | null)}
   * @memberof IaCoreHomeAssetModel
   */
  text: string | null;
}

/**
 * TODO: 🧐 Documentation Required
 */
const DEFAULT_IA_CORE_HOME_ASSET: IaCoreHomeAssetModel = {
  icon: { ...DEFAULT_IA_ICON }, text: null
};

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface IaCoreHomeAssetsModel
 */
export interface IaCoreHomeAssetsModel {
  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {IaCoreHomeAssetModel}
   * @memberof IaCoreHomeAssetsModel
   */
  view: IaCoreHomeAssetModel;

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {IaCoreHomeAssetModel}
   * @memberof IaCoreHomeAssetsModel
   */
  create: IaCoreHomeAssetModel;
}

/**
 * TODO: 🧐 Documentation Required
 */
export const DEFAULT_IA_CORE_HOME_ASSETS: IaCoreHomeAssetsModel = {
  view: { ...DEFAULT_IA_CORE_HOME_ASSET }, create: { ...DEFAULT_IA_CORE_HOME_ASSET }
};
