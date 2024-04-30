import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  dish:any={}
  pid:any
 
 
  constructor(private aroute:ActivatedRoute,private api:ApiService, private toastr: ToastrService){
    this.aroute.params.subscribe((res:any)=>{
      console.log(res.id)
     
      this.pid=res.id

      // console.log(this.pid)
      // console.log(res._id)
     
    })
  }
  
  ngOnInit() {
    this.getDish()
    console.log(this.pid)
    
  }
  getDish(){
    this.api.getspecificdish(this.pid).subscribe((res:any)=>{
      console.log(this.pid)
      console.log(res)
      
      this.dish=res
     
      

     
    })
  }

  

}
