import { Component, OnInit } from '@angular/core';

import { CommitService } from 'src/app/services/commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  commitList: Array<{
    commit: string,
    createdAt: number,
    timestamp: any
  }> = [];

  constructor(private commitService: CommitService) { }

  ngOnInit(): void {
    this.listCommits();
  }

  getDate(time: number) {
    const date = new Date(time);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  async listCommits() {
    try {
      const commits = await this.commitService.listCommit();
      commits.docs.map(docRef => {
        const data: any = docRef.data();
        this.commitList.push(data);
      });
    } catch(error) {
      console.log(error);
    }
  }
}
