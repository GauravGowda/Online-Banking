import { TestBed } from '@angular/core/testing';

import { ShareidService } from './shareid.service';

describe('ShareidService', () => {
  let service: ShareidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
