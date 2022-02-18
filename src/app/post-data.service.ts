import { Injectable } from '@angular/core';
import { POSTS } from "./post/posts";

@Injectable({
  providedIn: 'root'
})

export class PostDataService {

  posts = POSTS;

  constructor() { }

  getPosts(){
    return this.posts;
  }

  addPost(post: any){
    this.posts.push(post) ;
  }

  sortArray(arr: any): any{
    this.posts.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      // @ts-ignore
      return  new Date(b.date) - new Date(a.date);
    });
  }
}

