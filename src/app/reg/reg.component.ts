import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router,private toastr:ToastrService){

  }
  regForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@!]*'),Validators.minLength(4)]]
  })
  getFormData(){
    console.log(this.regForm.value)
    this.api.userRegister(this.regForm.value).subscribe({
      next:(res:any)=>{
        // console.log(res)
        this.toastr.success(`${this.regForm.value.username} successfully Registered!!`)
        
        this.router.navigateByUrl('/log')
      },
      error:(err)=>{
        // console.log(err)
        this.toastr.error("Registration Failed!!!")
      }
    })
  }


}
