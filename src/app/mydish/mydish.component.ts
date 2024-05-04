import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mydish',
  templateUrl: './mydish.component.html',
  styleUrls: ['./mydish.component.css']
})
export class MydishComponent  {
  dish:any=[]
  constructor(private router:Router,private api:ApiService,private toastr:ToastrService){}

  ngOnInit() {
    this.getData()
    
  }
  getData(){
    this.api. viewmyDish().subscribe((res:any)=>{
     
      console.log(res)
      this.dish=res
      console.log(this.dish)
    },
    (err:any)=>{
      console.log(err)
    }
    )
  }

  addMeal(data:any){
    if(sessionStorage.getItem('Token')){
      console.log(data);
      console.log(data);
      this.api.addPlan(data).subscribe({
        next:(res:any)=>{
          this.toastr.success("Item added to Meal plan") 
        },
        error:(err:any)=>{
          this.toastr.info(err.error)
        }
      }) 
    }
      else{
        this.toastr.warning("Login First")


      }
    
  }

deleteItem(id:any){
  this.api.deleteadminDish(id).subscribe({
    next:(res:any)=>{
     
      console.log(res);
      this.toastr.success(" dish Removed!")
      this.getData()
    },
    error:(err:any)=>{
      this.toastr.error(" Item Deletion Failed!")
    }
    })
  }

}
