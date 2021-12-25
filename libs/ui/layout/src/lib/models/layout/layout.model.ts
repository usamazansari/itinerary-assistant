import type { FooterData, ToolbarData } from '..';

// TODO: Usama Ansari - ♻️ Refactor this.

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
  toolbar: ToolbarData;
}
