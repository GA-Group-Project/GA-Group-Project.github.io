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

postForm: any;


  constructor( private formBuilder: FormBuilder,
                private postData: PostDataService) {

    this.postForm = this.formBuilder.group({
      id: ['', Validators.required],
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      author: ['', Validators.required],
      content: ['', Validators.required],
      cityId: [0 , Validators.required],
      date: ['' , Validators.required],
      img: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    }

  onSubmit(): void {
    console.warn('Your post has been submitted', this.postForm.value);
    this.postData.addPost(this.postForm.value);
    this.postData.setItem(this.postForm.value.id, JSON.stringify(this.postForm.value))
    let retrievedObject = localStorage.getItem('8');
    if ( retrievedObject){
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }

    this.postForm.reset();
  }

}
