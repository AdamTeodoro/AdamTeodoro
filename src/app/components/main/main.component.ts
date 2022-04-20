import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  xp = [
    {
      title: 'Estágio voluntário como suporte de TI',
      description: 'Manutenção de computadores, manutenção e configuração de rede, suporte aos docentes e professores e digitação de planílha eletrônica.',
      location: 'ETEC Laurindo Alves de Queiroz',
      duration: '3 meses'
    },
    {
      title: 'Estágio como desenvolvedor web full stack',
      description: 'Desenvolvimento de aplicação web, atuando no front-end com angular para criação de SPA e no back-end com express em ambiente nodejs, para a criação de api rest e banco de dados Cloud Firestore',
      location: 'CLICK RH',
      duration: '3 meses'
    },
    {
      title: 'Estágio como esenvolvimento de sistema',
      description: 'Desenvolvimento de aplicação web, atuando no front-end com angular para criação de SPA',
      location: 'VISCOM',
      duration: '1 mês'
    },
    {
      title: 'Desenvolvimento web full stack',
      description: 'Desenvolvimento de aplicação web com as tecnologias angular, solução para gerenciamento de candidatos e organização de pool de talentos.',
      location: 'CLICK RH',
      duration: '6 meses'
    }
  ]

}
