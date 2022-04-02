import { sharedDomain } from './shared-domain';

describe('sharedDomain', () => {
  it('should work', () => {
    expect(sharedDomain()).toEqual('shared-domain');
  });
});
