import { AddressBase, AddressBaseDTO } from '../../imports/models';

class Address extends AddressBase {}

class AddressDTO extends AddressBaseDTO {}

type AddressPersonAssociation = {
  addressId: string;
  personId: string;
};

export { Address, AddressDTO, AddressPersonAssociation };
