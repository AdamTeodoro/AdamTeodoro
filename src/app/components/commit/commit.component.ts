import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommitService } from 'src/app/services/commit.service';
import { CommitListComponentService } from '../commit-list/commit-list-component.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  private _showMensage: boolean = false;
  get showMensage() {
    return this._showMensage;
  }

  public fGCommit: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commitService: CommitService,
    private toastService: ToastService,
    private commitListComponentService: CommitListComponentService
  ) {
    this.fGCommit = this.formBuilder.group({
      'commit':[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)
        ])
      ]
    });
  }

  ngOnInit(): void {
  }

  get invalidForm() {
    return this.fGCommit.invalid;
  }

  async send() {
    if (this.fGCommit.valid) {
      const commit = this.fGCommit.controls.commit.value;
      await this.commitService.createCommit(commit)
      .then((data) => {
        //update template
        this.commitListComponentService.addCommit({
          commit,
          createdAt: Date.now(),
          timestamp: null
        });
        this.toastService.success('Comentário enviado com sucesso!')
      })
      .catch(() => this.toastService.danger('😞 Falha ao enviar comentário!'))
      .finally(() => this.fGCommit.reset());
    }
  }
}
