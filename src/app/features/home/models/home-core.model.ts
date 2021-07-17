import { ButtonModel, BUTTON_STUB } from '@shared/models/button/button.model';
import { IconModel, ICON_STUB } from '@shared/models/icon/icon.model';
import { ImageModel, IMAGE_STUB } from '@shared/models/image/image.model';
import { RouterPayloadModel } from '@core/models/common/router/router.model';
import { FlagModel, FLAG_STUB } from '@shared/models/flag/flag.model';

/**
 * Icon in `home` module.
 * 
 * ```ts
 * interface HomeIconModel {
 *   name  : IconName
 *   style : AppFaIconStyle
 * }
 * ```
 *
 * @export
 * @interface HomeIconModel
 * @extends {IconModel}
 */
export interface HomeIconModel extends IconModel { }

/**
 * Stub for `HomeIconModel`.
 * 
 * ```ts
 * const HOME_ICON_STUB: HomeIconModel = {
 *   style : 'fas',
 *   name  : 'info'
 * }
 * ```
 * 
 */
export const HOME_ICON_STUB: HomeIconModel = { ...ICON_STUB };

/**
 * Router Payload in `home` module.
 * 
 * ```ts
 * interface HomeRouterPayloadModel {
 *   routes : string[]
 *   extras : NavigationExtras
 * }
 * ```
 *
 * @export
 * @interface HomeRouterPayloadModel
 * @extends {RouterPayloadModel}
 */
export interface HomeRouterPayloadModel extends RouterPayloadModel { }

/**
 * Button in `home` module.
 * 
 * ```ts
 * interface HomeButtonModel {
 *   label : string | null
 *   icon  : HomeIconModel
 * }
 * ```
 *
 * @export
 * @interface HomeButtonModel
 * @extends {ButtonModel}
 */
export interface HomeButtonModel extends ButtonModel { }

/**
 * Stub for `HomeButtonModel`.
 * 
 * ```ts
 * const BUTTON_STUB: ButtonModel = {
 *   label    : null,
 *   icon     : { ...ICON_STUB },
 *   disabled : false
 * }
 * ```
 */
export const HOME_BUTTON_STUB: HomeButtonModel = { ...BUTTON_STUB };

/**
 * Image in `home` module.
 * 
 * ```ts
 * interface HomeImageModel {
 *   src : string | null
 *   alt : string | null
 * }
 * ```
 *
 * @export
 * @interface HomeImageModel
 * @extends {ImageModel}
 */
export interface HomeImageModel extends ImageModel { }

/**
 * Stub for `HomeImageModel`.
 * 
 * ```ts
 * const IMAGE_STUB: ImageModel = {
 *   src : null,
 *   alt : null
 * }
 * ```
 */
export const HOME_IMAGE_STUB: HomeImageModel = { ...IMAGE_STUB };

/**
 * Flag in `home` module.
 *
 * @export
 * @interface HomeFlagModel
 * @extends {FlagModel}
 */
export interface HomeFlagModel extends FlagModel { }

/**
 * Stub for `HomeFlagModel`.
 * 
 * ```ts
 * const FLAG_STUB: FlagModel = {
 *   progress : false,
 *   success  : false,
 *   fail     : false
 * }
 * ```
 */
export const HOME_FLAG_STUB: HomeFlagModel = { ...FLAG_STUB };
