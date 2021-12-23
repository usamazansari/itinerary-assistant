/**
 * ### Generic Object
 *
 * Any JavaScript Object can be used as a generic object. This type is
 * used in replacement of `unknown` or `any` when there is surety that
 * the entity would definitely be an object.
 *
 * @export
 * @interface GenericObject
 */
export interface GenericObject {
  [key: string]: string | string[] | number | number[] | boolean | boolean[] | GenericObject | GenericObject[];
}
