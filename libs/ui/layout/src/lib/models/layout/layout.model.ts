import type { FooterData, ToolbarDataModel } from '../';

/**
 * Data to display in the layout
 *
 * ```ts
 * interface LayoutDataModel {
 *   footer  : FooterDataModel;
 *   toolbar : ToolbarDataModel;
 * }
 * ```
 *
 * @export
 * @interface LayoutDataModel
 */
export interface LayoutDataModel {
  footer: FooterData;
  toolbar: ToolbarDataModel;
}
