import { FooterData, LayoutDataModel } from '../../models';
import { ToolbarDataStub } from '../../constants';

/**
 * Stub for `LayoutDataModel`
 *
 * ```ts
 * const LayoutDataStub: LayoutDataModel = {
 *   footer  : FooterDataStub,
 *   toolbar : ToolbarDataStub
 * };
 * ```
 */
export const LayoutDataStub: LayoutDataModel = {
  footer: new FooterData(),
  toolbar: { ...ToolbarDataStub }
};
