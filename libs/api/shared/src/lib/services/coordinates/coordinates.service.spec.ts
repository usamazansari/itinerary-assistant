import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesService } from './coordinates.service';

describe('CoordinatesService', () => {
  let service: CoordinatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinatesService]
    }).compile();

    service = module.get<CoordinatesService>(CoordinatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
