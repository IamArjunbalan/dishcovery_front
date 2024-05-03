import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent  implements OnInit {
  dish:any=[]
  searchKey:any=""
  constructor(private router:Router,private api:ApiService,private toastr:ToastrService){}

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


  logout(){
    sessionStorage.clear()
   
    this.router.navigateByUrl('')
   
  }

}
