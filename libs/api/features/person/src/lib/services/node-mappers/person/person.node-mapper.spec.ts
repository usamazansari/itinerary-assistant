import { Test, TestingModule } from '@nestjs/testing';
import { PersonNodeMapper } from './person.node-mapper';

describe('PersonService', () => {
  let service: PersonNodeMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonNodeMapper]
    }).compile();

    service = module.get<PersonNodeMapper>(PersonNodeMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
