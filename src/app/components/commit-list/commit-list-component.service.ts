import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitListComponentService {
  public commitListSubject = new BehaviorSubject<
    Array<{
      commit: string,
      createdAt: number,
      timestamp: any
    }>
  >([]);

  addCommit(commit: {
    commit: string,
    createdAt: number,
    timestamp: any
  }) {
    return this.commitListSubject.value.push(commit);
  }

  constructor() { }
}
