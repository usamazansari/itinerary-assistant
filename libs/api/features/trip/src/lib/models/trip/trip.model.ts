import { BaseModel, ITrip, Person } from '../../imports/models';

class Trip extends BaseModel implements ITrip {
  source: string;
  destination: string;
  start: Date;
  end: Date;
  name: string;
  accomplices: Person[];
  constructor({
    id = '',
    source = '',
    destination = '',
    start = new Date(Date.now()),
    end = new Date(Date.now()),
    name = '',
    accomplices = []
  }: Partial<Trip & BaseModel>) {
    super({ id });
    this.source = source;
    this.destination = destination;
    this.start = start;
    this.end = end;
    this.name = name;
    this.accomplices = accomplices.length ? accomplices : [];
  }

  getSource() {
    return this.source;
  }

  setSource(source = '') {
    this.source = source;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(destination = '') {
    this.destination = destination;
  }

  getStart() {
    return this.start;
  }

  setStart(start = new Date(Date.now())) {
    this.start = start;
  }

  getEnd() {
    return this.end;
  }

  setEnd(end = new Date(Date.now())) {
    this.end = end;
  }

  getTripName() {
    return this.name;
  }

  setTripName(name = '') {
    this.name = name;
  }
}

class TripDTO implements ITrip {
  source: string;
  destination: string;
  start: Date;
  end: Date;
  name: string;
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

export { Trip, TripDTO };
