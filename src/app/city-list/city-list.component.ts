import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cityList: { id: number, name: string, img: string }[] = [
    { "id": 0, "name": "London" , "img":"https://st3.depositphotos.com/1001146/14087/i/600/depositphotos_140879866-stock-photo-aerial-view-of-miami-beach.jpg"},
    { "id": 1, "name": "Sydney", "img":"https://st3.depositphotos.com/1001146/14087/i/600/depositphotos_140879866-stock-photo-aerial-view-of-miami-beach.jpg" },
    { "id": 2, "name": "San Francisco", "img":"https://st3.depositphotos.com/1001146/14087/i/600/depositphotos_140879866-stock-photo-aerial-view-of-miami-beach.jpg" },
    { "id": 3, "name": "Seattle", "img":"https://st3.depositphotos.com/1001146/14087/i/600/depositphotos_140879866-stock-photo-aerial-view-of-miami-beach.jpg" }
];
  constructor() { }

  ngOnInit(): void {
  }

}
