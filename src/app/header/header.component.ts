import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private router:Router,private api:ApiService){}

  ngOnInit():void {
    if(sessionStorage.getItem("existingUser")){
      const user:any=sessionStorage.getItem("existingUser")
      this.username=JSON.parse(user).username
     
    }
   
    
  }

  
  username:any=""

  logout(){
    sessionStorage.clear()
   
    this.router.navigateByUrl('')
   
  }

 


}
