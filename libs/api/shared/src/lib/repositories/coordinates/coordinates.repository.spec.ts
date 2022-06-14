import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesRepository } from './coordinates.repository';

describe('CoordinatesRepository', () => {
  let service: CoordinatesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinatesRepository]
    }).compile();

    service = module.get<CoordinatesRepository>(CoordinatesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
