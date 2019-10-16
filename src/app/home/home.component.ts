import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUIser: User = {
      nick: 'Eduardo',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: true,
      uid: 1
    }

    let users: User[] = [];

  }

  ngOnInit() {
  }

}
