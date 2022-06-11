/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IBaseRelationship<Model = any> {
  id: string;
  start: string;
  end: string;
  data: Model;
}

const Timestamp = new Date().valueOf();

const RelationshipStub: IBaseRelationship = {
  id: `new-relationship-${Timestamp}`,
  start: '',
  end: '',
  data: {} as any
};

export class BaseRelationship<Model = any> implements IBaseRelationship {
  id: string;
  start: string;
  end: string;
  data: Model;

  constructor({
    id = RelationshipStub.id,
    start = RelationshipStub.start,
    end = RelationshipStub.end,
    data = RelationshipStub.data
  }: Partial<IBaseRelationship>) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.data = data;
  }
}
