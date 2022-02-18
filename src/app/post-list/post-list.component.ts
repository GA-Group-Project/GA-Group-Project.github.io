import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../post-data.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = this.postData.getAllPosts();
  locals = this.postData;

  constructor(private postData: PostDataService) {
    // this.posts = this.postData.getPosts();
  }

  ngOnInit(): void {
    // this.posts = this.postData.getPosts();
    console.log("This postlist is getting inited. ")
    console.log(this.posts);
    this.postData.getAllPosts();

  }

}
