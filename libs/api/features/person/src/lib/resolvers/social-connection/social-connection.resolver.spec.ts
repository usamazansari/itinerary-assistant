import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectionResolver } from './social-connection.resolver';

describe('SocialConnectionResolver', () => {
  let resolver: SocialConnectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialConnectionResolver]
    }).compile();

    resolver = module.get<SocialConnectionResolver>(SocialConnectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
