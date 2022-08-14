import { Address, AddressDTO } from '../../models';

const generateCreateAddressObject = ({
  id,
  apartment,
  city,
  country,
  landmark,
  locality,
  room,
  state,
  street,
  suburb,
  wing,
  zip
}: Partial<Address>) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!apartment) _ = { ..._, apartment };
  if (!!city) _ = { ..._, city };
  if (!!country) _ = { ..._, country };
  if (!!landmark) _ = { ..._, landmark };
  if (!!locality) _ = { ..._, locality };
  if (!!room) _ = { ..._, room };
  if (!!state) _ = { ..._, state };
  if (!!street) _ = { ..._, street };
  if (!!suburb) _ = { ..._, suburb };
  if (!!wing) _ = { ..._, wing };
  if (!!zip) _ = { ..._, zip };

  return { ..._ } as Partial<Address>;
};

const generateUpdateAddressObject = ({
  apartment,
  city,
  country,
  landmark,
  locality,
  room,
  state,
  street,
  suburb,
  wing,
  zip
}: AddressDTO) => {
  let _ = {};
  if (!!apartment) _ = { ..._, ['address.apartment']: apartment };
  if (!!city) _ = { ..._, ['address.city']: city };
  if (!!country) _ = { ..._, ['address.country']: country };
  if (!!landmark) _ = { ..._, ['address.landmark']: landmark };
  if (!!locality) _ = { ..._, ['address.locality']: locality };
  if (!!room) _ = { ..._, ['address.room']: room };
  if (!!state) _ = { ..._, ['address.state']: state };
  if (!!street) _ = { ..._, ['address.street']: street };
  if (!!suburb) _ = { ..._, ['address.suburb']: suburb };
  if (!!wing) _ = { ..._, ['address.wing']: wing };
  if (!!zip) _ = { ..._, ['address.zip']: zip };

  return _ as Partial<AddressDTO>;
};
export { generateCreateAddressObject, generateUpdateAddressObject };
