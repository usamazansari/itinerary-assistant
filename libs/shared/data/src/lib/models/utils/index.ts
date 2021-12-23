// TODO: Usama Ansari - 🧐 Documentation required.
export interface GenericObject {
  [key: string]:
  string | string[]
  | number | number[]
  | boolean | boolean[]
  | GenericObject | GenericObject[];
}
