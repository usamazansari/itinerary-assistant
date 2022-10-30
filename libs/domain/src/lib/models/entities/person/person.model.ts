import { Gender } from '../../../constants';
import { Getters, Setters } from '../utils';

interface IPersonBase {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;
}

type IPerson = IPersonBase & Getters<IPersonBase> & Setters<IPersonBase>;

export { IPersonBase, IPerson };
