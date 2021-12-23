// TODO: Usama Ansari - 🧐 Documentation required.

interface IAuthorization {
  username: string;
  password: string;
}

const AuthorizationStub = {
  username: '',
  password: ''
};

export class Authorization implements IAuthorization {
  username: string;
  password: string;

  constructor(
    init: IAuthorization = { ...AuthorizationStub }
  ) {
    this.username = init.username;
    this.password = init.password;
  }
}
