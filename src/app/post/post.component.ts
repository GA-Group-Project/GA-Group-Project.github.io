import { Component, OnInit } from '@angular/core';
import { POSTS } from './posts';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // post: any;
posts = POSTS
 // posts:any = require('./posts');
  constructor() { }

  ngOnInit(): void {
  }

}
