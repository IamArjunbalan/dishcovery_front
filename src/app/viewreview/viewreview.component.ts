import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {
  review:any=[]
  constructor(private router:Router,private api:ApiService,private toastr:ToastrService){

  }
  ngOnInit() {
    this.getData()
    
  }
  getData(){
    this.api.viewReview().subscribe((res:any)=>{
     
      console.log(res)
      this.review=res
    },
    (err:any)=>{
      console.log(err)
    }
    )
  }

  
  deleteItem(id:any){
    this.api.deleteReview(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("Review deleted")
        this.getData()
        
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error("Deletion failed")
      }
    })
  }


  logout(){
    sessionStorage.clear() 
    this.router.navigateByUrl('')
   
  }



}
