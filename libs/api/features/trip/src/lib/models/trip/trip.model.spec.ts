import { Trip } from './trip.model';

describe('Trip', () => {
  it('should be defined', () => {
    expect(new Trip({})).toBeDefined();
  });
});
