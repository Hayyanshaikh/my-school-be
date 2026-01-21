import { Test, TestingModule } from '@nestjs/testing';
import { AcademixController } from './academix.controller';
import { AcademixService } from './academix.service';

describe('AcademixController', () => {
  let controller: AcademixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademixController],
      providers: [AcademixService],
    }).compile();

    controller = module.get<AcademixController>(AcademixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
