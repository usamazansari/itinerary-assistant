import { Test } from '@nestjs/testing';
import { ApiCoreController } from './api-core.controller';

describe('ApiCoreController', () => {
  let controller: ApiCoreController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiCoreController]
    }).compile();

    controller = module.get(ApiCoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
