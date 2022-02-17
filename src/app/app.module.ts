import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityListComponent } from './city-list/city-list.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CityComponent,
    CityListComponent,
    PostComponent,
    PostListComponent,
    PostPageComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
