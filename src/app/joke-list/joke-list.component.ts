import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes : Array<Joke> = Joke.JOKE_DB;

  constructor() {}

  ngOnInit() {
  }
}
