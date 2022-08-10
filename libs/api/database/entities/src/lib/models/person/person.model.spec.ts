import { PersonModel } from './person.model';

describe('PersonModel', () => {
  it('should be defined', () => {
    expect(new PersonModel()).toBeDefined();
  });
});
