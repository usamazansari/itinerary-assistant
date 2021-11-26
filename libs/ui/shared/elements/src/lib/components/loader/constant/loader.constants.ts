import { LoaderConfigModel } from '../model/loader.model';

// TODO: 🧐 Documentation Required
/**
 *
 *
 * @export
 * @enum {number}
 */
export enum LoaderSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export const LoaderSizeMap: Map<LoaderSize, number> = new Map([
  [LoaderSize.Small, 16],
  [LoaderSize.Medium, 32],
  [LoaderSize.Large, 96]
]);

// TODO: 🧐 Documentation Required
/**
 *
 */
export const LoaderConfigStub: LoaderConfigModel = {
  visible: false,
  size: LoaderSize.Medium
};
