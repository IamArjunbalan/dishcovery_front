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
  // dish:any=[]
  // constructor(private router:Router,private api:ApiService,private toastr:ToastrService){}

  // ngOnInit() {
  //   this.getData()
    
  // }
  // getData(){
  //   this.api.viewmyDish().subscribe((res:any)=>{
     
  //     console.log(res)
  //     this.dish=res
  //   },
  //   (err:any)=>{
  //     console.log(err)
  //   }
  //   )
  // }

}
