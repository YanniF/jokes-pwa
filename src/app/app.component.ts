import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jokes';
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload()); // if there an update, the page will reload
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res
      this.joke = this.joke.replace(/&quot;/g,'"');
    });
  }
}

/* 
  Things to add:
  - push notification
  - add icon to home screen
*/