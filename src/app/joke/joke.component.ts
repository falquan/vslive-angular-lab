import { Component, OnInit } from '@angular/core';
import { Joke } from './joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke : Joke = Joke.JOKE

  constructor() { }

  ngOnInit() {
  }

}
