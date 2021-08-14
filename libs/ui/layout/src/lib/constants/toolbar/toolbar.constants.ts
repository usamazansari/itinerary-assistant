import { IconStub } from '../../imports/models';
import {
  ToolbarAssetsModel,
  ToolbarDataModel,
  ToolbarVMModel
} from '../../models';

/**
 * Stub for `ToolbarAssetsModel`
 *
 * ```ts
 * const ToolbarAssetsStub: ToolbarAssetsModel = {
 *   trigger : { ...IconStub }
 *   logo    : ''
 * };
 * ```
 */
export const ToolbarAssetsStub: ToolbarAssetsModel = {
  trigger: { ...IconStub }
};

// TODO: 🧐 Documentation Required
export const ToolbarDataStub: ToolbarDataModel = {
  logo: ''
};

// TODO: 🧐 Documentation Required
export const ToolbarVMStub: ToolbarVMModel = {
  assets: { ...ToolbarAssetsStub },
  data: { ...ToolbarDataStub }
};
