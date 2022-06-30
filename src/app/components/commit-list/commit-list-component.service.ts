import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Commit } from 'src/app/interfaces/commit';

@Injectable({
  providedIn: 'root'
})
export class CommitListComponentService {
  public commitListSubject = new BehaviorSubject<Array<Commit>>([]);

  addCommit(commit: Commit) {
    const notExists = this.commitListSubject.value
    .find((c) => c.id == commit.id)? false: true;
    if (notExists) {
      this.commitListSubject.value.push(commit)
    }
  }

  constructor() { }
}
