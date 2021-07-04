import { ButtonModel, BUTTON_STUB } from '@shared/models/button/app-button.model';
import { IconModel, ICON_STUB } from '@shared/models/icon/app-icon.model';
import { ImageModel, IMAGE_STUB } from '@shared/models/image/app-image.model';
import { RouterPayloadModel } from '@shared/models/router/app-router.model';
import { FlagModel, FLAG_STUB } from '@shared/models/flag/app-flag.model';

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
 * @extends {IconModel}
 */
export interface IaCoreIconModel extends IconModel { }

export const DEFAULT_IA_ICON: IaCoreIconModel = { ...ICON_STUB };

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
 * @extends {RouterPayloadModel}
 */
export interface IaCoreRouterPayloadModel extends RouterPayloadModel { }

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
 * @extends {ButtonModel}
 */
export interface IaCoreButtonModel extends ButtonModel { }

export const DEFAULT_IA_BUTTON: IaCoreButtonModel = { ...BUTTON_STUB };

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
 * @extends {ImageModel}
 */
export interface IaCoreImageModel extends ImageModel { }

export const DEFAULT_IA_IMAGE: IaCoreImageModel = { ...IMAGE_STUB };

export interface IaCoreFlagModel extends FlagModel { }

export const DEFAULT_IA_CORE_FLAG: IaCoreFlagModel = { ...FLAG_STUB };
