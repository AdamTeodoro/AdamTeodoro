import { Component } from '@angular/core';
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
  }


}
