interface ISanityBase {
  message: string;
}

export abstract class SanityBase implements ISanityBase {
  message: string;
  constructor({ message = '' }: Partial<ISanityBase>) {
    this.message = message;
  }
}
