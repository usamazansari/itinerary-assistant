import { IaFaIconModel } from 'app/common/models/ia-fa-icon.model';

export interface IaNavbarItemModel {
  icon: IaFaIconModel;
  label: string;
  children: IaNavbarItemModel[];
}

export interface IaNavbarModel {
  id: string;
  items: IaNavbarItemModel[];
}
