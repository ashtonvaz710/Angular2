import { Component } from '@angular/core';
import {PostsService} from './services/posts.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div *ngFor="let post of posts">
  <h3>{{post.title}}</h3>
  <p>{{post.body}}</p>
  `,
  providers: [PostsService]
})
export class AppComponent  { 
  name = 'Ashton';
  posts: Post[];


  constructor(private postsService: PostsService){
    
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}