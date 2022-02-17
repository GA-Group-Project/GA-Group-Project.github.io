import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import {HomeComponent} from "./home/home.component";
import { PostComponent } from './post/post.component';
import { PostListComponent} from "./post-list/post-list.component";
import {PostPageComponent} from "./post-page/post-page.component";
import { PostFormComponent } from './post-form/post-form.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: 'posts/:id',
    component: PostPageComponent
  },

  {
    path: 'posts',
    component: PostListComponent
  },

  {
    path: 'city/:id',
    component: CityComponent,
    children: [
    ]
  },
  {
    path: 'post/new',
    component: PostFormComponent,
    children: [
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
