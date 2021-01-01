import { TestBed } from '@angular/core/testing';

import { SubjectSerivceService } from './subject-serivce.service';

describe('SubjectSerivceService', () => {
  let service: SubjectSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
