import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];
  constructor() {
    let usuario1: User = {
      nick: 'Eduardo',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: User = {
      nick: 'Yuliana',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: true,
      uid: 1
    }
    let usuario3: User = {
      nick: 'Freddy',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: true,
      uid: 1
    }
    let usuario4: User = {
      nick: 'Maria',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: false,
      uid: 1
    }
    let usuario5: User = {
      nick: 'Pablo',
      age: 28,
      email: 'aoe@aoe.aoe',
      friend: false,
      uid: 1
    }

    this.friends = [usuario1, usuario2, usuario4, usuario5];

  }

  ngOnInit() {
  }

}
