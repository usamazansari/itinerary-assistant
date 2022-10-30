type Setters<T> = {
  [P in keyof T as `set${Capitalize<string & P>}`]: (value: T[P]) => void;
};

export { Setters };
