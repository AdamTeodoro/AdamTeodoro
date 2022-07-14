import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-start',
  templateUrl: './learn-start.component.html',
  styleUrls: ['./learn-start.component.css']
})
export class LearnStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open(url: string) {
    window.open(url, '_blank');
  }

}
