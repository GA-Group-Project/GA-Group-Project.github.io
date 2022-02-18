import { Component, OnInit } from '@angular/core';
import { CityListComponent } from '../city-list/city-list.component';
import { HttpClient } from "@angular/common/http";
import { CITIES } from '../city-list/cities';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from "../post-data.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: any;
  cities = CITIES;

  weather: any;

key: string = '052f26926ae9784c2d677ca7bc5dec98'

  posts = this.postsData.getAllPosts();

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private postsData: PostDataService) {
    // this.sortArray(this.posts);
    // this.posts = posts;
   }




  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        this.http
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city.name.toLowerCase()}&appid=${this.key}&&units=imperial`
          )
          .subscribe((response) => {
            console.log(response);
            this.weather = response;
          });
        return city.id === parseInt(paramId)
      })
    })
    //         `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
  }

}
