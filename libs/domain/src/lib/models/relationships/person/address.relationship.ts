import { AddressType, RentFrequency } from '../../../constants';
import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface IAddressRelationshipData {
  expense: number;
  frequency: RentFrequency;
  type: AddressType;
}

const AddressRelationshipDataStub: IAddressRelationshipData = {
  expense: 0,
  frequency: RentFrequency.MONTHLY,
  type: AddressType.RENT
};

export class AddressRelationshipData implements IAddressRelationshipData {
  expense: number;
  frequency: RentFrequency;
  type: AddressType;

  constructor({
    expense = AddressRelationshipDataStub.expense,
    frequency = AddressRelationshipDataStub.frequency,
    type = AddressRelationshipDataStub.type
  }: Partial<IAddressRelationshipData>) {
    this.expense = expense;
    this.frequency = frequency;
    this.type = type;
  }
}

const AddressRelationshipStub = new BaseRelationship<AddressRelationshipData>({
  id: `new-address-relationship-${Timestamp}`,
  start: `person-for-new-address-relationship-${Timestamp}`,
  end: `address-for-new-address-relationship-${Timestamp}`,
  data: new AddressRelationshipData({})
});

export class AddressRelationship extends BaseRelationship<AddressRelationshipData> {
  constructor({
    id = AddressRelationshipStub.id,
    start: personId = AddressRelationshipStub.start,
    end: addressId = AddressRelationshipStub.end,
    data = AddressRelationshipStub.data
  }: Partial<AddressRelationship>) {
    super({ id, start: personId, end: addressId, data });
    this.id = id;
    this.start = personId;
    this.end = addressId;
    this.data = data;
  }
}
