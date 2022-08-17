import { Gender } from '../../../constants';

interface IPerson {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;
}

export { IPerson };
