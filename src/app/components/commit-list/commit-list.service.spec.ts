import { TestBed } from '@angular/core/testing';


describe('CommitListService', () => {
  let service: CommitListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
