import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private firestore: Firestore) { }

  async createCommit(commit: string) {
    try {
      await addDoc(collection(this.firestore, "Commit"), {
        timestamp: serverTimestamp(),
        commit: commit
      });
    } catch(e) {
      console.log(e);
    }
  }
}
