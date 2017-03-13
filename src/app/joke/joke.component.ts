import { Component, OnInit, Input } from '@angular/core';
import { Joke } from './joke.model';
import { ActivatedRoute } from "@angular/router";

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
  joke : Joke;
  setup : string;
  punchline : string;
  lols: number;
  groans: number;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    let jokeId = this.route.snapshot.params['id'];

    let jokes = Joke.JOKE_DB;

    jokes.forEach(joke => {
      if (joke.id === jokeId) {
        this.joke = joke;
      }
    });

    if (this.joke) {
      this.setup = this.joke.setup;
      this.punchline = this.joke.punchline;
      this.lols = this.joke.lolCount;
      this.groans = this.joke.groanCount;
    }
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
