import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { POSTS } from '../post/posts';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
posts = POSTS;

postForm: any;


  constructor( private formBuilder: FormBuilder) { 
    this.postForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      author: ['', Validators.required],
      description: ['', Validators.required],
      cityId: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.postForm = new FormGroup({
    //   title: new FormControl([
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])
    // })
    }

  onSubmit(): void {
    // Process checkout data here
  
    console.warn('Your post has been submitted', this.postForm.value);
    this.posts.push(this.postForm.value);
    console.log(this.posts);
  
    this.postForm.reset();
  }

}
