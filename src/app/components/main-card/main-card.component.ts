import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  profileLink = "https://siaa.cruzeirodosul.edu.br/consulta-diploma/resultado/index.jsf;jsessionid=k5ikw5V7SVaIds_LbRzbulwbJbFxVc3GjFaGdSFw.mianmar16:srv-consulta-diploma-A16";
  name = "Adam Teodoro Nunes da Silva";

  constructor(
    private clipboard: Clipboard,
    private toast: ToastService,
  ) { }

  ngOnInit(): void {
  }

  copy() {
    this.toast.success("Copiado com sucesso!");
    this.clipboard.copy(this.name);
  }

  openNewTab() {
    window.open(this.profileLink, '_blank')
  }

}
