import { Component, OnInit } from '@angular/core';
import { POSTS } from "../post/posts";
import  { ActivatedRoute } from "@angular/router";
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post :any;
  posts = POSTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = POSTS.find(post => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId)
      })
    })
  }

}
