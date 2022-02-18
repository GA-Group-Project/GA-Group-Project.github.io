import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../city-list/cities';
import { ElementRef } from "@angular/core";
import { PostDataService } from "../post-data.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  post: any;
  cities = CITIES
  @Input('postNumber') postNumber: any;

  posts = this.postData.getAllPosts();

  postDate = new Date();


  constructor(private route: ActivatedRoute,
              private ele: ElementRef,
              private postData: PostDataService ) {

  // this.sortArray(this.posts);
  //   this.postNumber = this.ele.nativeElement.getAttribute('postNumber');
  //   //console.log(this.posts)
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     if( this.posts){

       this.post = this.posts.find((post: any) => {

         let paramId: string = params.get('id') || '';
         return parseInt( post.id ) === parseInt(paramId)
       })
     }
    })
  }

}



