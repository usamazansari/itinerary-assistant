import { Person } from './person.model';

describe('Person', () => {
  it('should be defined', () => {
    expect(new Person({})).toBeDefined();
  });
});
