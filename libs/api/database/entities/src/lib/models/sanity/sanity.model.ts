import { SanityBase } from '../../imports/models';

export class Sanity extends SanityBase {
  constructor({ message = '' }: Partial<SanityBase>) {
    super({ message });
  }
}
