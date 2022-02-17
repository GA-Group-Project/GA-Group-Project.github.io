import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { POSTS } from "../post/posts";
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  posts = POSTS
  search: string = ''
  searchSubject = new Subject();

  results: any = []

  constructor() { }

  findPost(search: string) {
    console.log(search)
    this.searchSubject.next(search)
    // this.posts.findIndex((obj) => {
    //   if(obj.title === search || obj.desc === search) {
    //   console.log('we found it')
    // }})

    this.posts.forEach(post => {
      if (post.title.includes(search)) {
        this.results.push(post.title);
        console.log(this.results)
      }
    })
  }

  ngOnInit(): void {
  }

}
