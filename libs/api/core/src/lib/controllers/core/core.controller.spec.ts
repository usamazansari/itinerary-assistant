import { Test } from '@nestjs/testing';
import { CoreController } from './core.controller';

describe('CoreController', () => {
  let controller: CoreController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [CoreController]
    }).compile();

    controller = module.get(CoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
