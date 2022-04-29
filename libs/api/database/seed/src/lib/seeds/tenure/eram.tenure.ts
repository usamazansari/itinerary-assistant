import { Tenure } from '../../imports/models';

export const EramTenureIds = {
  Aadhar: 'person-2-id-1-validity',
  Passport: 'person-2-id-2-validity'
};

export const EramTenures: Tenure[] = [
  new Tenure({
    id: EramTenureIds.Aadhar,
    start: new Date(1970, 0, 1),
    end: new Date(1970, 0, 1)
  }),
  new Tenure({
    id: EramTenureIds.Passport,
    start: new Date(2013, 3, 15),
    end: new Date(2023, 3, 14)
  })
];
