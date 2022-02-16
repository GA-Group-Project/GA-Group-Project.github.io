import { Component, OnInit } from '@angular/core';
import { POSTS } from './posts';
import { ActivatedRoute } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { CITIES } from '../city-list/cities';
import { CityListComponent } from '../city-list/city-list.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  post: any;
  cities = CITIES
  

posts = POSTS
 // posts:any = require('./posts');
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



