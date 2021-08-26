import type { LayoutDataModel } from '../../models';
import { FooterDataStub, ToolbarDataStub } from '../../constants';

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
  footer: { ...FooterDataStub },
  toolbar: { ...ToolbarDataStub }
};
