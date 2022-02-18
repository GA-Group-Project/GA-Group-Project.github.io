import { Injectable } from '@angular/core';
import { POSTS } from "./post/posts";

@Injectable({
  providedIn: 'root'
})

export class PostDataService {

  posts = POSTS;

  constructor() { }

  getPosts(){

    // localStorage.getItem(key)
    let keys = Object.keys(localStorage)
    console.log(keys);
    return this.posts;
  }

  getAllPosts(){
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    this.posts.forEach(post => {
      values.push(post);
    })

    while ( i-- ) {
      // @ts-ignore
      values.push( JSON.parse(localStorage.getItem(keys[i]) ));
    }
    console.log("Here are the values from getAllPosts()")
    console.log(values)

    // values = this.sortArray(values);
    return values;
  }

  addPost(post: any){
    this.posts.push(post) ;
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string){
    return localStorage.getItem(key)
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear();
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

// export class LocalStorageService {
//   constructor() { }
// }
