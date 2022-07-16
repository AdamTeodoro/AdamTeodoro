import { Component, HostListener } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

import {
  collection,
  doc,
  increment,
  setDoc
} from '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adam Teodoro';

  constructor(private firestore: Firestore) {
    (async () => {
      const date = new Date();
      const dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const docRef = doc(collection(this.firestore, "Access"), 'idAccess');
      await setDoc(docRef, {
        access: increment(1),
        lastAccess: dateString
      });
    })();
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
