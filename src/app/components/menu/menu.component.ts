import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
  }

  hiddenMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = "none";
  }

  slowCloseMenu() {
    if (window.screen.width <= 1200) {
      setTimeout(() => {
        this.closeMenu();
      }, 1000);
    }
  }

  closeMenu() {
    setTimeout(() => {
      const menu = document.getElementById("menu");
      menu.style.marginLeft = "-100%";
      const btnHamburguer = document.getElementById('hamburger');
      let btnBefore = document.getElementById('before');
      let btnAfter = document.getElementById('after');
      btnHamburguer.style.borderTopColor = "black";
      btnBefore.style.transform = 'rotate(0deg)';
      btnAfter.style.transform = 'rotate(0deg)';
      btnAfter.style.top = '0px';
      //menu effect
      menu.style.width = "0%";
      // to apply transition effect
      setTimeout(() => {
        menu.style.opacity = "0";
        menu.style.marginLeft = "-100%";
        this.hiddenMenu();
      }, 300);
      this.menuStatus = false;
    }, 10);
  }

  openMenu() {
    this.showMenu();
    setTimeout(() => {
      const menu = document.getElementById("menu");
      menu.style.marginLeft = "0%";
      const btnHamburguer = document.getElementById('hamburger');
      let btnBefore = document.getElementById('before');
      let btnAfter = document.getElementById('after');
      btnHamburguer.style.borderTopColor = "transparent";
      btnBefore.style.transform = 'rotate(135deg)';
      btnAfter.style.transform = 'rotate(-135deg)';
      btnAfter.style.setProperty('top', '-7px');
      //menu effect
      // menu.style.display = "block";
      menu.style.opacity = "1";
      menu.style.width = "100%";
      this.menuStatus = true;
    }, 10);
  }

  actionMenu() {
    if (this.menuStatus) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  getMenu(): HTMLElement {
    return document.getElementById("menu");
  }

  setStateMenuInicial() {
    let menu = this.getMenu();
    menu.style.height = "120px";
    menu.style.boxShadow = '5px 5px 5px #eee';
    menu.style.padding = "2%";
    menu.style.paddingBottom = "5%";
  }

  setStateMenuMove() {
    let menu = this.getMenu();
    menu.style.height = "100px";
    menu.style.boxShadow = '3px 3px 3px #eee';
    menu.style.padding = "1%";
    menu.style.paddingBottom = "5%";
  }

}
