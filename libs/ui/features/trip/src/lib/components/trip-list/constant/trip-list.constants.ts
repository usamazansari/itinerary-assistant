import { Button, Icon } from '../imports';
import { TripListAssets, TripListError } from '..';

/**
 * ### Trip List Assets
 *
 * ```ts
 * const _TripListAssets: TripListAssets = new TripListAssets({
 *   view      : new Button({
 *     icon    : new Icon({
 *       name  : 'eye',
 *       style : 'fas'
 *     }),
 *     text    : 'View'
 *   })
 * })
 * ```
 *
 * @export
 */
export const _TripListAssets: TripListAssets = new TripListAssets({
  view: new Button({
    icon: new Icon({
      name: 'eye',
      style: 'fas'
    }),
    text: 'View'
  })
});

/**
 * Trip List Initial Error.
 *
 * ```ts
 * const _TripListError: TripListError = new TripListError({
 *   message : 'Something went wrong'
 * })
 * ```
 */
export const _TripListError: TripListError = new TripListError({
  message: ''
});
