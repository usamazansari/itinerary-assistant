import { IaCoreIconModel, DEFAULT_IA_ICON, IaCoreRouterPayloadModel } from '@ia-core/models/ia-core.model';

interface IaNavbarItemModel {
  label: string | null;
  routes: string[];
  icon: IaCoreIconModel;
  children: IaNavbarItemModel[];
}

const DEFAULT_NAVBAR_ITEM: IaNavbarItemModel = {
  label: null, routes: [], icon: { ...DEFAULT_IA_ICON }, children: []
};

export interface IaNavbarAssetsModel {
  trigger: IaCoreIconModel;
  logo: IaNavbarItemModel;
}

export const DEFAULT_IA_NAVBAR_ASSETS: IaNavbarAssetsModel = {
  trigger: { ...DEFAULT_IA_ICON },
  logo: { ...DEFAULT_NAVBAR_ITEM }
};

export interface IaNavbarRouterPayloadModel extends IaCoreRouterPayloadModel { }
