import { Getters, Setters } from '../utils';

interface ITripBase {
  source: string;
  destination: string;
  start: Date;
  end: Date;
  name: string;
}

type ITrip = ITripBase & Getters<ITripBase> & Setters<ITripBase>;

export { ITripBase, ITrip };
