import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ top: 0 });

    setTimeout(() => {
      const main = this.getElement("main");
      this.slideElement(main);
    }, 500);
  }

  getElement(name: string) {
    return document.getElementById(name);
  }

  slideElement(element: HTMLElement) {
    element.style.setProperty("margin-right", '0%');
    element.style.setProperty("margin-left", '2%');
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    try {
      const projects = this.getElement("projects");
      const learn = this.getElement("learn");
      const scrollBarTopDistance = document.documentElement.scrollTop;
      const projectsTopDistance = projects.offsetTop;
      const learnTopDistance = learn.offsetTop;
      if (scrollBarTopDistance >= projectsTopDistance - (projectsTopDistance / 3)) {
        this.slideElement(projects);
      }
      if (scrollBarTopDistance >= learnTopDistance - (learnTopDistance / 3)) {
        this.slideElement(learn);
      }
    } catch { }
  }
}
