import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
//  changeDetection: changeDetection.onPush
// Use this to attempt to update smaller chunks of the
// DOM to improve performance for large payloads.
})
export class JokeListComponent implements OnInit {
  jokes : Array<Joke> = Joke.JOKE_DB;

  constructor(private router:Router) {}

  ngOnInit() {
  }

  selectJoke(id:string) {
    this.router.navigateByUrl(`jokes/${id}`);
  }
}
