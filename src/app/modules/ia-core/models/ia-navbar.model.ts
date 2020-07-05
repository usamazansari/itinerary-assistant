import { IaFaIconModel } from 'app/common/models/ia-fa-icon.model';

interface IaNavbarItemModel {
  icon: IaFaIconModel;
  label: string;
  children: IaNavbarItemModel[];
}

export interface IaNavbarModel {
  id: string;
  state: {
    bIsOpen: boolean;
  };
  trigger: {
    close: { icon: IaFaIconModel; };
    open: { icon: IaFaIconModel; };
  };
  items: IaNavbarItemModel[];
}
