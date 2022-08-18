import { Address } from './address.model';

describe('Address', () => {
  it('should be defined', () => {
    expect(new Address({})).toBeDefined();
  });
});
