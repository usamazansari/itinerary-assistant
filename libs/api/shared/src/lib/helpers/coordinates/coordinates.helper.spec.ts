import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesHelper } from './coordinates.helper';

describe('LocationService', () => {
  let service: CoordinatesHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinatesHelper]
    }).compile();

    service = module.get<CoordinatesHelper>(CoordinatesHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
