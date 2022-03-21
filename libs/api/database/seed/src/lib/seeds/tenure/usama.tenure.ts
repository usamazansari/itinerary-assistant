import { Tenure } from '../../imports/models';

export const UsamaTenureIds = {
  Aadhar: 'user-1-id-1-validity',
  Passport: 'user-1-id-2-validity'
};

export const UsamaTenures: Tenure[] = [
  new Tenure({
    id: UsamaTenureIds.Aadhar,
    start: new Date(1970, 0, 1),
    end: new Date(1970, 0, 1)
  }),
  new Tenure({
    id: UsamaTenureIds.Passport,
    start: new Date(2015, 3, 15),
    end: new Date(2025, 3, 14)
  })
];
