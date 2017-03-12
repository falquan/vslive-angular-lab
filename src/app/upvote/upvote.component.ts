import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input()
  votes: number;
  @Output()
  incrementVotes : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  incrementVote() : void {
    this.incrementVotes.emit();
  }
}
