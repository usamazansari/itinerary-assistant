import type { LayoutDataModel } from '../../models';
import { FooterDataStub, ToolbarDataStub } from '../../constants';

// TODO: 🧐 Documentation Required
export const LayoutDataStub: LayoutDataModel = {
  footer: { ...FooterDataStub },
  toolbar: { ...ToolbarDataStub }
};
