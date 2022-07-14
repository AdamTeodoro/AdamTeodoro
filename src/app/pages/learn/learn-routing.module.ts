import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnComponent } from './learn.component';
import { BackEndComponent } from './pages/back-end/back-end.component';
import { FirebaseRulesComponent } from './pages/firebase-rules/firebase-rules.component';
import { FirestoreComponent } from './pages/firestore/firestore.component';
import { FrontEndComponent } from './pages/front-end/front-end.component';
import { JsComponent } from './pages/js/js.component';
import { LearnStartComponent } from './pages/learn-start/learn-start.component';
import { SqlComponent } from './pages/sql/sql.component';
import { TsComponent } from './pages/ts/ts.component';

const routes: Routes = [
  {
    path: '',
    component: LearnComponent,
    children: [
      {
        path: 'back-end',
        component: BackEndComponent,
      },
      {
        path: 'firestore',
        component: FirestoreComponent
      },
      {
        path: 'firebase-rules',
        component: FirebaseRulesComponent
      },
      {
        path: 'front-end',
        component: FrontEndComponent
      },
      {
        path: 'javascript',
        component: JsComponent
      },
      {
        path: 'iniciando',
        component: LearnStartComponent,
      },
      {
        path: 'sql',
        component: SqlComponent
      },
      {
        path: 'typescript',
        component: TsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
