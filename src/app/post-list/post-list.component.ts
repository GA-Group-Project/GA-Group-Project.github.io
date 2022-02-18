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
  }

  ngOnInit(): void {
    console.log("This postlist is getting inited. ")
    console.log(this.posts);
    this.postData.getAllPosts();

  }

}
