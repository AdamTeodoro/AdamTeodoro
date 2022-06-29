import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query
} from "firebase/firestore";
import { orderBy, limit } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class CommitService {

  private commitRef = collection(this.firestore, "Commit");

  constructor(private firestore: Firestore) { }

  createCommit(commit: string) {
    return addDoc(this.commitRef, {
      timestamp: serverTimestamp(),
      commit: commit,
      createdAt: Date.now()
    });
  }

  listCommit() {
    return getDocs(query(
      this.commitRef,
      orderBy("createdAt", "desc"),
      limit(20)
    ));
  }

}
