import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  idProjectSelected: string = "";

  projectDescriptions: Array<{ idProject: string, description: string, link: string}> = [
    {
      idProject: 'Hup shop',
      description: `Comercio eletrônico completo responsivo e desenvolvido, com SEO otimizado, feito para receber clientes do Brasil inteiro.`,
      link: 'https://hup-shop.com'
    },
    {
      idProject: 'Jogo da frutinha',
      description: `Esse projeto foi inspirado no projeto de um youtuber(Felipe Deschamps), essa é uma versão mais simples, o código do jogo foi desenvolvido para funcionar apenas no client-side e aceita apenas 2 jogadores por partida. Para esse projeto, utilizei javascript puro, a finalidade era fazer a mesma coisa porém de outra forma, então fiz toda a lógica de programação com vanillajs e claro, foi necessário html e css. `,
      link: 'https://github.com/AdamTeodoro/Jogo-da-frutinha.github.io'
    },
    {
      idProject: 'Simulador de teclado Nokia',
      description: `Na verdade, esse não é bem um projeto, mas sim um desafio proposto,
      no qual decidi resolver utilizando javascript puro no front-end, e typescript no back-end,
      nesse desafio eu deveria simular um teclado de celular antigo e esse seria um ótimo treino
      e exercício de lógica e algoritmo. Para resolver esse desafio foi necessário criar uma
      aplicação front-end com html, css e js, onde pegaria os números digitados pelo usuário
      transformaria em texto enviaria para o back-end, para então decodificar e devolver
      para o front-end um texto codificado.`,
      link: 'https://github.com/AdamTeodoro/SIMULANDO-TECLADO-DO-NOKIA'
    },
    {
      idProject: 'Laravel CRUD',
      description: 'Fiz um CRUD com laravel para ter conhecimentos sobre a tecnologia.',
      link: 'https://github.com/AdamTeodoro/CRUD-LARAVEL'
    },
    {
      idProject: 'swagger',
      description: "Para incrementar e exercitar meus conhecimentos sobre APIs, criei a documentação de uma api web com swagger.",
      link: "https://github.com/AdamTeodoro/usando-swagger"
    },
    {
      idProject: 'Slim Coffee Theme',
      description: "Criei um tema para para visual studio code personalizado.",
      link: "https://marketplace.visualstudio.com/items?itemName=slim-coffee-theme.slim-coffee"
    }
  ];

  getProjectDescriptionByProjectId() {
    return this.projectDescriptions
    .filter(
      (productDescription) => productDescription.idProject === this.idProjectSelected
    )[0];
  }

  setIdProject(idProject: string) {
    this.idProjectSelected = idProject;
  }

  openInNewTab() {
    const projectDescription = this.getProjectDescriptionByProjectId();
    window.open(projectDescription.link, '_blank');
  }

  ngOnInit(): void { }

}
