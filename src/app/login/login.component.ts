import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb:FormBuilder, private api:ApiService, private toastr: ToastrService, private router:Router){

  }

  logForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@!]*'),Validators.minLength(4)]]

  })
  getFormData(){
    console.log(this.logForm.value)
    
    
    this.api.userLogin(this.logForm.value).subscribe({
     
      next:(res:any)=>{
        if(res.existingUser){
          console.log(res)
        sessionStorage.setItem('existingUser',JSON.stringify(res.existingUser))
        sessionStorage.setItem('Token',res.token)
        sessionStorage.setItem('role',res.role)
    
        this.toastr.success("sign in successful")
        this.router.navigateByUrl('/dishlist')

        }
        else if(res.existingAdmin){
          console.log(res)
          sessionStorage.setItem('existingAdmin',JSON.stringify(res.existingAdmin))
          sessionStorage.setItem('Token',res.token)
          sessionStorage.setItem('role',res.role)
      
          this.toastr.success("sign in successful")
          this.router.navigateByUrl('/admindash')

        }
        
        
      },
      error:(err:any)=>{
        this.toastr.error(err.error)

      }
    })
  }


}
