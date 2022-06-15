import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectionService } from './social-connection.service';

describe('SocialConnectionService', () => {
  let service: SocialConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialConnectionService]
    }).compile();

    service = module.get<SocialConnectionService>(SocialConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
