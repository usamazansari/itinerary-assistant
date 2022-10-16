import { v4 as uuid } from 'uuid';

abstract class BaseModel {
  public id!: string;

  constructor({ id = '' }: Partial<BaseModel>) {
    if (!!id) {
      this.id = id;
    } else {
      this.setId(uuid());
    }
  }

  private setId(id = ''): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }
}

export { BaseModel };
