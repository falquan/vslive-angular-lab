import { Component, OnInit } from '@angular/core';
import { Joke } from './joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  // This is meant to show that a component would consume
  // a backing model and then pull out the relevant data
  // for mutation in the form, rather than mutating the state
  // of a shared model object.
  joke : Joke = Joke.JOKE
  setup : string;
  punchline : string;
  lols: number;
  groans: number;

  constructor() {
    this.setup = this.joke.setup;
    this.punchline = this.joke.punchline;
    this.lols = this.joke.lolCount();
    this.groans = this.joke.groanCount();
  }

  ngOnInit() {
  }

  onGroanIncrement() : void {
    this.joke.addGroan();
    this.groans++;
  }

  onLolIncrement() : void {
    this.joke.addLol();
    this.lols++;
  }
}
