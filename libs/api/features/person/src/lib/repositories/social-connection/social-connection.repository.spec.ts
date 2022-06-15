import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectionRepository } from './social-connection.repository';

describe('IdentificationService', () => {
  let service: SocialConnectionRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialConnectionRepository]
    }).compile();

    service = module.get<SocialConnectionRepository>(
      SocialConnectionRepository
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
