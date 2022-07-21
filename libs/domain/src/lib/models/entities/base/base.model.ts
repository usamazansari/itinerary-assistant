import { v4 as uuid } from 'uuid';

abstract class BaseModel {
  public id: string;

  constructor({ id = '' }: Partial<BaseModel>) {
    this.id = id;
  }

  public setId(id = ''): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public generateUUID(): void {
    this.setId(uuid());
  }
}

export { BaseModel };
