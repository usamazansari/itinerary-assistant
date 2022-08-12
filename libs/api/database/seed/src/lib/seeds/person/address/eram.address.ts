import { Address } from '../../../imports/models';

const id = 'person-2-address';

const EramAddress = new Address({
  id,
  room: 'G2',
  wing: '',
  apartment: 'Al-Noor',
  street: 'Mumbai-Pune Road',
  landmark: 'Bharti Chambers',
  locality: 'Takoli Mohalla',
  suburb: 'Kalwa West',
  city: 'Thane',
  state: 'Maharashtra',
  country: 'India',
  zip: '400605'
});

export { EramAddress };
