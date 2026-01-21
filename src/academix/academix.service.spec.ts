import { Test, TestingModule } from '@nestjs/testing';
import { AcademixService } from './academix.service';

describe('AcademixService', () => {
  let service: AcademixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademixService],
    }).compile();

    service = module.get<AcademixService>(AcademixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
