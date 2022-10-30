import { PersonEntity } from './person.entity';

describe('PersonEntity', () => {
  it('should be defined', () => {
    expect(new PersonEntity()).toBeDefined();
  });
});
