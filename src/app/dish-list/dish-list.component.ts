import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dish:any=[]
  searchKey:any=""
  constructor(private router:Router,private api:ApiService,private toastr:ToastrService){

  }
  ngOnInit() {
    this.getData()
    
  }
  getData(){
    this.api.viewDishes().subscribe((res:any)=>{
     
      console.log(res)
      this.dish=res
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

}
