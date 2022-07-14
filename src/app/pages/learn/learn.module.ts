import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';

import { LearnStartComponent } from './pages/learn-start/learn-start.component';
import { FrontEndComponent } from './pages/front-end/front-end.component';
import { BackEndComponent } from './pages/back-end/back-end.component';
import { FirestoreComponent } from './pages/firestore/firestore.component';
import { FirebaseRulesComponent } from './pages/firebase-rules/firebase-rules.component';
import { SqlComponent } from './pages/sql/sql.component';
import { JsComponent } from './pages/js/js.component';
import { TsComponent } from './pages/ts/ts.component';
import { BuildingComponent } from 'src/app/components/building/building.component';

@NgModule({
  declarations: [
    LearnStartComponent,
    FrontEndComponent,
    BackEndComponent,
    FirestoreComponent,
    FirebaseRulesComponent,
    SqlComponent,
    JsComponent,
    TsComponent,
    BuildingComponent,
  ],
  imports: [
    CommonModule,
    LearnRoutingModule
  ],
})
export class LearnModule { }
