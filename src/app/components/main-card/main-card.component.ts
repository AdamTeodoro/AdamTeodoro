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
  cod3r = "https://www.cod3r.com.br/certificates/yyhatioqwt";
  loiane = "https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G";
  udemy = "https://www.udemy.com/certificate/UC-d9e2f8cb-70a3-47f4-a3eb-90f6ec2138bf/";

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
