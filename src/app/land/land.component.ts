import { Component } from '@angular/core';



@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent {
  k:any

  isLoggedIn(){
    return !!sessionStorage.getItem("Token")
  }

  getUserRole(): string | null {
    // Logic to get user role from session storage
    return sessionStorage.getItem('role');
  }
 

}
