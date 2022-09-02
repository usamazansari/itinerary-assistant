import { BaseModel, ITrip, Person } from '../../imports/models';

class Trip extends BaseModel implements ITrip {
  public source: string;
  public destination: string;
  public start: Date;
  public end: Date;
  public name: string;
  public accomplices: Person[] = [];

  constructor({
    id = '',
    source = '',
    destination = '',
    start = new Date(Date.now()),
    end = new Date(Date.now()),
    name = ''
  }: Partial<Trip & BaseModel>) {
    super({ id });
    this.source = source;
    this.destination = destination;
    this.start = start;
    this.end = end;
    this.name = name;
  }

  public getSource() {
    return this.source;
  }

  public setSource(source = '') {
    this.source = source;
  }

  public getDestination() {
    return this.destination;
  }

  public setDestination(destination = '') {
    this.destination = destination;
  }

  public getStart() {
    return this.start;
  }

  public setStart(start = new Date(Date.now())) {
    this.start = start;
  }

  public getEnd() {
    return this.end;
  }

  public setEnd(end = new Date(Date.now())) {
    this.end = end;
  }

  public getName() {
    return this.name;
  }

  public setName(name = '') {
    this.name = name;
  }

  public getAccomplices() {
    return this.accomplices;
  }

  public setAccomplices(accomplices: Person[]) {
    this.accomplices = accomplices;
  }
}

class TripDTO implements ITrip {
  public source: string;
  public destination: string;
  public start: Date;
  public end: Date;
  public name: string;
  constructor({
    source = '',
    destination = '',
    start = new Date(Date.now()),
    end = new Date(Date.now()),
    name = ''
  }: Partial<TripDTO>) {
    this.source = source;
    this.destination = destination;
    this.start = start;
    this.end = end;
    this.name = name;
  }
}

type TripPersonAssociation = {
  tripId: string;
  personId: string;
};

export { Trip, TripDTO, TripPersonAssociation };
