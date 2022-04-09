import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface IAddressRelationshipData {
  expense: number;
  // TODO: Usama Ansari - Convert it to enum
  frequency: 'monthly' | 'yearly';
  // TODO: Usama Ansari - Convert it to enum
  type: 'rent' | 'owner';
}

const AddressRelationshipDataStub: IAddressRelationshipData = {
  expense: 0,
  frequency: 'yearly',
  type: 'rent'
};

export class AddressRelationshipData implements IAddressRelationshipData {
  expense: number;
  frequency: 'monthly' | 'yearly';
  type: 'rent' | 'owner';

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
  start: `user-for-new-address-relationship-${Timestamp}`,
  end: `address-for-new-address-relationship-${Timestamp}`,
  data: new AddressRelationshipData({})
});

export class AddressRelationship extends BaseRelationship<AddressRelationshipData> {
  constructor({
    id = AddressRelationshipStub.id,
    start: userId = AddressRelationshipStub.start,
    end: addressId = AddressRelationshipStub.end,
    data = AddressRelationshipStub.data
  }: Partial<AddressRelationship>) {
    super({ id, start: userId, end: addressId, data });
    this.id = id;
    this.start = userId;
    this.end = addressId;
    this.data = data;
  }
}
