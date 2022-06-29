import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommitService } from 'src/app/services/commit.service';
import { CommitListComponentService } from './commit-list-component.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit, OnDestroy {

  commitList: Array<{
    commit: string,
    createdAt: number,
    timestamp: any
  }> = [];

  private commitListSubscription: Subscription;

  constructor(
    private commitService: CommitService,
    private commitListService: CommitListComponentService,
  ) { }

  ngOnInit(): void {
    this.commitListSubscription = this.commitListService.commitListSubject
    .subscribe((data) => {
      this.commitList = data;
    });
    this.listCommits()
  }

  ngOnDestroy(): void {
    if (this.commitListSubscription) {
      this.commitListSubscription.unsubscribe();
    }
  }

  async listCommits() {
    try {
      const commits = await this.commitService.listCommit();
      commits.docs
      .map((data: any) => {
        this.commitListService.addCommit(data.data());
      });
    } catch(error) {
      console.log(error);
    }
  }
}
