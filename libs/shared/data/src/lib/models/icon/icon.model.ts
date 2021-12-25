import type {
  IconName,
  IconPrefix
} from '@fortawesome/fontawesome-common-types';

/**
 * Icon Model.
 *
 * ```ts
 * interface IIcon {
 *   style : IconPrefix;
 *   name  : IconName;
 * }
 * ```
 *
 * @interface IIcon
 */
interface IIcon {
  style: IconPrefix;
  name: IconName;
}

/**
 * Stub for an `IconModel`
 *
 * ```ts
 * const IconStub: IIcon = {
 *   style : 'fas',
 *   name  : 'info'
 * }
 * ```
 */
const IconStub: IIcon = {
  style: 'fas',
  name: 'info'
};

/**
 * FontAwesome Icon Wrapper
 *
 * @export
 * @interface IconModel
 */
export class Icon implements IIcon {
  style: IconPrefix;
  name: IconName;

  /**
   * ### Icon Wrapper
   *
   * Icon for the `FontAwesome` Icon Library to be used throughout the
   * application. It defaults to display `fas-info` icon when
   * initialized.
   *
   * ```ts
   * const IconStub: Icon = new Icon({
   *   style : 'fas',
   *   name  : 'info'
   * });
   * ```
   * @param {IIcon} [init={ ...IconStub }]
   * @memberof Icon
   */
  constructor(
    init: Partial<IIcon> = { ...IconStub }
  ) {
    this.style = init.style ?? IconStub.style;
    this.name = init.name ?? IconStub.name;
  }
}
