import { AppFaIconModel, DEFAULT_FA_ICON } from '@shared/models/icon/app-icon.model';

/**
 * Interface for Button used in the entire application
 *
 * @export
 * @interface AppButtonModel
 */
export interface AppButtonModel {
  label: string | null;
  icon?: AppFaIconModel;
}

export const DEFAULT_APP_BUTTON: AppButtonModel = {
  label: null, icon: { ...DEFAULT_FA_ICON }
};
