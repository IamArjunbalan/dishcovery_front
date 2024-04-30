import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent {
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router,private toastr:ToastrService){

  }
  // imageUrl:any
  // imageFile:any

  // onFileSelected(event: any) {
   
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.imageUrl = e.target.result;
  //       this.imageFile=file
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  addForm=this.fb.group({
    image:['',[Validators.required]],
    name:['',[Validators.required]],
    ingredients:['',[Validators.required]],
    instruction:['',[Validators.required]],
    preptime:['',[Validators.required]],
    cooktime:['',[Validators.required]],
    category:['',[Validators.required]],
    youtube:['',[Validators.required]],
  })
  getFormData(){
    const formData=new FormData()
    // formData.append("image",this.imageFile)
    // console.log(this.addForm.value)
    this.api. addDetails(this.addForm.value).subscribe({
      next:(res:any)=>{
        // console.log(res)
        this.toastr.success('dish added')
        
      //  this.imageUrl='/uploads/image/addimage.jpeg'
        
        this.router.navigateByUrl('/dishlist')
      },
      error:(err)=>{
        // console.log(err)
        this.toastr.error("upload Failed!!!")
        console.log(err)
      }
    })
  }


}
