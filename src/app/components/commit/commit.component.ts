import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommitService } from 'src/app/services/commit.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {


  public fGCommit: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commitService: CommitService
  ) {
    this.fGCommit = this.formBuilder.group({
      'commit':[
        '',
        Validators.compose([
          Validators.required,
          Validators.min(3),
          Validators.max(500)
        ])
      ]
    });
  }

  ngOnInit(): void {
  }

  isValidCommit() {
    return this.fGCommit.valid;
  }

  async send() {
    if (this.isValidCommit()) {
      await this.commitService.createCommit(this.fGCommit.controls.commit.value)
      .then(() => {
        this.fGCommit.reset();
      })
    }
  }
}
