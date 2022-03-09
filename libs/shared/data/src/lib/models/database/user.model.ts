const Timestamp = new Date().toISOString();

export interface IUser {
  id: string;
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`
};

export class User implements IUser {
  id: string;

  constructor({ id = UserStub.id }: Partial<IUser>) {
    this.id = id;
  }
}
