import { TestBed } from '@angular/core/testing';

import { CommitListComponentService } from './commit-list-component.service';

describe('CommitListComponentService', () => {
  let service: CommitListComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitListComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
