import { Test, TestingModule } from '@nestjs/testing';
import { PersonHelper } from './person.helper';

describe('PersonHelper', () => {
  let service: PersonHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonHelper]
    }).compile();

    service = module.get<PersonHelper>(PersonHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
