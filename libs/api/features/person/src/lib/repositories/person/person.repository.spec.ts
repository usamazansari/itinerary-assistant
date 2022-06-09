import { Test, TestingModule } from '@nestjs/testing';
import { PersonRepository } from './person.repository';

describe('PersonService', () => {
  let service: PersonRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonRepository]
    }).compile();

    service = module.get<PersonRepository>(PersonRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
