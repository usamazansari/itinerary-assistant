import { FooterData, ToolbarData } from '..';

/**
 * Layout Data Model.
 *
 * ```ts
 * interface LayoutData {
 *   footer  : FooterData;
 *   toolbar : ToolbarData;
 * }
 * ```
 *
 * @export
 * @interface LayoutData
 */
interface ILayoutData {
  footer: FooterData;
  toolbar: ToolbarData;
}

/**
 * Stub for Layout Data Model.
 *
 * ```ts
 * const LayoutDataStub: ILayoutData = {
 *   footer  : new FooterData(),
 *   toolbar : new ToolbarData()
 * }
 * ```
 */
const LayoutDataStub: ILayoutData = {
  footer: new FooterData({}),
  toolbar: new ToolbarData({})
};

/**
 * Layout Data class.
 *
 * @export
 * @class LayoutData
 * @implements {ILayoutData}
 */
export class LayoutData implements ILayoutData {
  footer: FooterData;
  toolbar: ToolbarData;

  /**
   * ### Layout Data
   *
   * Creates an instance of LayoutData.
   *
   * ```ts
   * const layoutData: LayoutData = new LayoutData({
   *   footer: new FooterData(),
   *   toolbar: new ToolbarData()
   * });
   * ```
   * @param {Partial<ILayoutData>} [LayoutDataStub]
   * @memberof LayoutData
   */
  constructor({
    footer = LayoutDataStub.footer,
    toolbar = LayoutDataStub.toolbar
  }: Partial<ILayoutData>) {
    this.footer = footer ?? LayoutDataStub.footer;
    this.toolbar = toolbar ?? LayoutDataStub.toolbar;
  }
}
