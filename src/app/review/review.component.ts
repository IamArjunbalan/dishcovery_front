import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router,private toastr:ToastrService){

  }
  reviewForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    location:['',[Validators.required]],
    message:['',[Validators.required]]

  })
  getFormData(){
    console.log(this.reviewForm.value)
    this.api.userReview(this.reviewForm.value).subscribe({
      next:(res:any)=>{
        // console.log(res)
        this.toastr.success(`Review submitted successfully`)

        this.router.navigateByUrl('/')
       
      },
      error:(err)=>{
        // console.log(err)
        this.toastr.error("Review submition failed Failed!!!")
      }
    })
  }


}
