import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

// type AppFaIconSize =
//   | 'xs'
//   | 'sm'
//   | 'lg'
//   | '2x'
//   | '3x'
//   | '4x'
//   | '5x'
//   | '6x'
//   | '7x'
//   | '8x'
//   | '9x'
//   | '10x'

// type AppFaIconRotate =
//   | 0
//   | 90
//   | 180
//   | 270

// type AppFaIconFlip =
//   | 'horizontal'
//   | 'vertical'
//   | 'both'

// type AppFaIconPull =
//   | 'left'
//   | 'right'

// interface AppFaIconStackIconModel {
// icon: AppFaIconModel | null
// stackItemSize?: AppFaIconSize | null
// }

/**
 * Interface for a `FontAwesome` icon definition
 *
 * @export
 * @interface AppFaIconModel
 */
export interface AppFaIconModel {
  style: IconPrefix;
  name: IconName;
  // morph?: {
  //   size?: AppFaIconSize | null
  //   rotate?: AppFaIconRotate | null
  //   flip?: AppFaIconFlip | null
  //   fixedWidth?: boolean
  //   animate?: {
  //     spin?: boolean
  //     pulse?: boolean
  //   } | null
  //   border?: boolean
  //   pull?: AppFaIconPull | null
  // } | null
  // powerTx?: string | null
  // mask?: AppFaIconModel | null
  // inverse?: boolean
}

/**
 * Interface for an icon layer
 *
 * @export
 * @interface AppFaIconLayerModel
 */
// export interface AppFaIconLayerModel {
//   fixedWidth?: boolean
//   icons: AppFaIconModel[]
//   counter?: string | null
// }

/**
 * Interface for a stacked icon
 *
 * @export
 * @interface AppFaIconStackModel
 */
// export interface AppFaIconStackModel {
//   background: AppFaIconStackIconModel | null
//   foreground: AppFaIconStackIconModel | null
// }

export const DEFAULT_FA_ICON: AppFaIconModel = {
  style: 'fas', name: 'info',
  // powerTx: null, mask: null, inverse: null,
  // morph: {
  //   size: null, rotate: 0, flip: null, fixedWidth: false, border: false, pull: null,
  //   animate: { pulse: false, spin: false }
  // }
};
