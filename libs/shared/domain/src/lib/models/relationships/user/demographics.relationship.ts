import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

const DemographicsRelationshipStub = new BaseRelationship({
  id: `new-demographics-relationship-${Timestamp}`,
  start: '',
  end: '',
  data: {}
});

export class DemographicsRelationship extends BaseRelationship {
  constructor({
    id = DemographicsRelationshipStub.id,
    start = DemographicsRelationshipStub.start,
    end = DemographicsRelationshipStub.end,
    data = DemographicsRelationshipStub.data
  }: Partial<DemographicsRelationship>) {
    super({ id, start, end, data });
    this.id = id;
    this.start = start;
    this.end = end;
    this.data = data;
  }
}
