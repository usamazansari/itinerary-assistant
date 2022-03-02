/**
 * Loader Size.
 *
 * | Loader Size | Size in Pixels |
 * | ----------: | :------------- |
 * |     `Small` | `16px`         |
 * |    `Medium` | `32px`         |
 * |     `Large` | `96px`         |
 *
 * @export
 * @enum {number}
 */
export enum LoaderSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

/**
 * Loader Size Map.
 *
 * ```ts
 * const LoaderSizeMap = new Map<LoaderSize, number>();
 * // LoaderSize.Small  => 16
 * // LoaderSize.Medium => 32
 * // LoaderSize.Large  => 96
 * ```
 */
export const LoaderSizeMap: Map<LoaderSize, number> = new Map([
  [LoaderSize.Small, 16],
  [LoaderSize.Medium, 32],
  [LoaderSize.Large, 96]
]);
