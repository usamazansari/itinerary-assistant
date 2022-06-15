import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectionHelper } from './social-connection.helper';

describe('SocialConnectionHelper', () => {
  let service: SocialConnectionHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialConnectionHelper]
    }).compile();

    service = module.get<SocialConnectionHelper>(SocialConnectionHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
