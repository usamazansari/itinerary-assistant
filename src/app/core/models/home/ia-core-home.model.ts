import { DEFAULT_IA_ICON, IaCoreIconModel } from '@ia-core/models/ia-core.model';

/**
 * TODO: :monocle_face: Documentation Required
 *
 * @interface IaCoreHomeAssetModel
 */
interface IaCoreHomeAssetModel {
  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {IaCoreIconModel}
   * @memberof IaCoreHomeAssetModel
   */
  icon: IaCoreIconModel;

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {(string | null)}
   * @memberof IaCoreHomeAssetModel
   */
  text: string | null;
}

/**
 * TODO: :monocle_face: Documentation Required
 */
const DEFAULT_IA_CORE_HOME_ASSET: IaCoreHomeAssetModel = {
  icon: { ...DEFAULT_IA_ICON }, text: null
};

/**
 * TODO: :monocle_face: Documentation Required
 *
 * @export
 * @interface IaCoreHomeAssetsModel
 */
export interface IaCoreHomeAssetsModel {
  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {IaCoreHomeAssetModel}
   * @memberof IaCoreHomeAssetsModel
   */
  view: IaCoreHomeAssetModel;

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {IaCoreHomeAssetModel}
   * @memberof IaCoreHomeAssetsModel
   */
  create: IaCoreHomeAssetModel;
}

/**
 * TODO: :monocle_face: Documentation Required
 */
export const DEFAULT_IA_CORE_HOME_ASSETS: IaCoreHomeAssetsModel = {
  view: { ...DEFAULT_IA_CORE_HOME_ASSET }, create: { ...DEFAULT_IA_CORE_HOME_ASSET }
};
