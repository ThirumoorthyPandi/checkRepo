import { TestBed } from '@angular/core/testing';

import { Site24Service } from './site24.service';

describe('Site24Service', () => {
  let service: Site24Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Site24Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
