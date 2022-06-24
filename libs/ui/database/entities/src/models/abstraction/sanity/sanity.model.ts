import { SanityBase } from '../../../imports/models';

export class SanityModel extends SanityBase {
  constructor({ message }: Partial<SanityBase>) {
    super({ message });
  }
}
