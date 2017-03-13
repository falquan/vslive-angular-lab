import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { JokeListComponent } from './joke-list/joke-list.component';

const appRoutes : Routes = [
  { path: 'jokes', component: JokeListComponent },
  { path: 'jokes/:id', component: JokeComponent },
  { path: '', redirectTo: 'jokes', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    UpvoteComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
