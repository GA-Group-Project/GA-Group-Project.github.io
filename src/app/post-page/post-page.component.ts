import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../post-data.service";
import  { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post :any;
  posts = this.postData.getAllPosts();

  constructor(private route: ActivatedRoute,
              private postData: PostDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = this.posts.find(post => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId)
      })
    })
  }

}
