import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PostDataService } from "../post-data.service";
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

posts = this.postData.getPosts();

postForm: any;


  constructor( private formBuilder: FormBuilder,
                private postData: PostDataService) {

    this.postForm = this.formBuilder.group({
      id: ['', Validators.required],
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      author: ['', Validators.required],
      content: ['', Validators.required],
      cityId: ['' , Validators.required],
      date: ['' , Validators.required],
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
    console.log(this.posts);
    console.warn('Your post has been submitted', this.postForm.value);
    this.postData.addPost(this.postForm.value);
    console.log(this.posts);


    this.postForm.reset();
  }

}
