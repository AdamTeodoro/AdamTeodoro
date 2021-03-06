import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LearnComponent } from './pages/learn/learn.component';
import { HomeComponent } from './pages/home/home.component';
import { CommitComponent } from './components/commit/commit.component';
import { ToastComponent } from './components/toast/toast.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { LearnCardComponent } from './components/learn-card/learn-card.component';
import { CommitListComponent } from './components/commit-list/commit-list.component';
import { MortarboardComponent } from './icons/mortarboard/mortarboard.component';
import { ClipboardComponent } from './icons/clipboard/clipboard.component';
import { XpComponent } from './icons/xp/xp.component';
import { LinkedinComponent } from './icons/linkedin/linkedin.component';
import { GithubComponent } from './icons/github/github.component';

import { environment } from 'src/environments/environment.prod';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LearnComponent,
    HomeComponent,
    CommitComponent,
    ToastComponent,
    ProjectsComponent,
    MainCardComponent,
    LearnCardComponent,
    CommitListComponent,
    MortarboardComponent,
    ClipboardComponent,
    XpComponent,
    LinkedinComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
