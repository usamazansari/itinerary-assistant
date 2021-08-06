import { FooterDataStub, ToolbarDataStub } from '../';
import type { FooterDataModel, ToolbarDataModel } from '../';

export interface LayoutDataModel {
  footer: FooterDataModel;
  toolbar: ToolbarDataModel;
}

export const LayoutDataStub: LayoutDataModel = {
  footer: { ...FooterDataStub },
  toolbar: { ...ToolbarDataStub }
};
