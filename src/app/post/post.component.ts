import {Component, Input, OnInit} from '@angular/core';
import { POSTS } from './posts';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../city-list/cities';
import { ElementRef} from "@angular/core";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  post: any;
  cities = CITIES
  @Input('postNumber') postNumber: number;

  posts = POSTS

  constructor(private route: ActivatedRoute, private ele: ElementRef) {
  this.postNumber = this.ele.nativeElement.getAttribute('postNumber');
  // this.sortArray(this.posts);
  }

  // sortArray(arr: any): any{
  //   this.posts.sort(function(a,b){
  //     // Turn your strings into dates, and then subtract them
  //     // to get a value that is either negative, positive, or zero.
  //     // @ts-ignore
  //     return  new Date(b.date) - new Date(a.date);
  //   });
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = POSTS.find(post => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId)
      })
    })
  }

}



