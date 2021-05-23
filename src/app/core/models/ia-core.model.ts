import { AppButtonModel, DEFAULT_APP_BUTTON } from '@shared/models/button/app-button.model';
import { AppFaIconModel, DEFAULT_FA_ICON } from '@shared/models/icon/app-icon.model';
import { AppImageModel, DEFAULT_APP_IMAGE } from '@shared/models/image/app-image.model';
import { AppRouterPayloadModel } from '@shared/models/router/app-router.model';

/**
 * Icon in `ia-core` module.
 * 
 * ```ts
 * interface IaIconModel {
 *   name  : IconName
 *   style : AppFaIconStyle
 * }
 * ```
 *
 * @export
 * @interface IaIconModel
 * @extends {AppFaIconModel}
 */
export interface IaCoreIconModel extends AppFaIconModel { }

export const DEFAULT_IA_ICON: IaCoreIconModel = { ...DEFAULT_FA_ICON };

/**
 * Router Payload in `ia-core` module.
 * 
 * ```ts
 * interface IaRouterPayloadModel {
 *   routes : string[]
 *   extras : NavigationExtras
 * }
 * ```
 *
 * @export
 * @interface IaRouterPayloadModel
 * @extends {AppRouterPayloadModel}
 */
export interface IaCoreRouterPayloadModel extends AppRouterPayloadModel { }

/**
 * Button in `ia-core` module.
 * 
 * ```ts
 * interface IaButtonModel {
 *   label : string | null
 *   icon  : IaIconModel
 * }
 * ```
 *
 * @export
 * @interface IaButtonModel
 * @extends {AppButtonModel}
 */
export interface IaCoreButtonModel extends AppButtonModel { }

export const DEFAULT_IA_BUTTON: IaCoreButtonModel = { ...DEFAULT_APP_BUTTON };

/**
 * Image in `ia-core` module.
 * 
 * ```ts
 * interface IaImageModel {
 *   src : string | null
 *   alt : string | null
 * }
 * ```
 *
 * @export
 * @interface IaImageModel
 * @extends {AppImageModel}
 */
export interface IaCoreImageModel extends AppImageModel { }

export const DEFAULT_IA_IMAGE: IaCoreImageModel = { ...DEFAULT_APP_IMAGE };
