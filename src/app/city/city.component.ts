import { Component, OnInit } from '@angular/core';
import { CityListComponent } from '../city-list/city-list.component';
import { CITIES } from '../city-list/cities';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from "../post/posts";


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: any;
  cities = CITIES;
  posts = POSTS;


  constructor(private route: ActivatedRoute) {
    this.sortArray(this.posts);
   }

  sortArray(arr: any): any{
    this.posts.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      // @ts-ignore
      return  new Date(b.date) - new Date(a.date);
    });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId)
      })

    })
  }

}
