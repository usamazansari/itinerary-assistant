import type { FooterDataModel, ToolbarDataModel } from '../';
import { FooterDataStub } from '../'; // TODO: Update this import
import { ToolbarDataStub } from '../../constants';

export interface LayoutDataModel {
  footer: FooterDataModel;
  toolbar: ToolbarDataModel;
}

// TODO: Move to constants
export const LayoutDataStub: LayoutDataModel = {
  footer: { ...FooterDataStub },
  toolbar: { ...ToolbarDataStub }
};
