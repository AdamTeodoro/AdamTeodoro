import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Commit } from 'src/app/interfaces/commit';

import { CommitService } from 'src/app/services/commit.service';
import { CommitListComponentService } from './commit-list-component.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit, OnDestroy {

  commitList: Array<Commit> = [];

  private commitListSubscription: Subscription;

  constructor(
    private commitService: CommitService,
    private commitListService: CommitListComponentService,
  ) {
    this.listCommits();
    this.commitListSubscription = this.commitListService.commitListSubject
    .subscribe((data) => {
      this.commitList = data;
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.commitListSubscription) {
      this.commitListSubscription.unsubscribe();
    }
  }

  async listCommits() {
    try {
      const commits = await this.commitService.listCommit();
      commits.docs.map((data: any) => {
        this.commitListService.addCommit(data.data());
      });
    } catch(error) {
      console.log(error);
    }
  }
}
