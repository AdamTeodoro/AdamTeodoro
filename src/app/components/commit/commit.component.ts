import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommitService } from 'src/app/services/commit.service';
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
    private toastService: ToastService
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
      await this.commitService.createCommit(this.fGCommit.controls.commit.value)
      .then(() => this.toastService.success('Comentário enviado com sucesso!'))
      .catch(() => this.toastService.danger('😞 Falha ao enviar comentário!'))
      .finally(() => this.fGCommit.reset());
    }

  }
}
