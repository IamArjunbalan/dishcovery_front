import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL="http://localhost:3000"
  // https://dishcovery-server.onrender.com
  
 
  constructor(private http:HttpClient) { }
  appendTokenToHeader(){
    const token=sessionStorage.getItem('Token')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  userRegister(data:any){
    return this.http.post(`${this.SERVER_URL}/user/register`,data)

  }
  userLogin(data:any){
    return this.http.post(`${this.SERVER_URL}/user/login`,data)

  }
  userReview(data:any){
    return this.http.post(`${this.SERVER_URL}/user/review`,data)

  }
  viewReview(){
    return this.http.get(`${this.SERVER_URL}/user/viewReview`)

  }
  deleteReview(id:any){
    return this.http.delete(`${this.SERVER_URL}/user/deleteReview/${id}`,this.appendTokenToHeader())
  }

  addDetails(data:any){
    return this.http.post(`${this.SERVER_URL}/user/adddishes`,data,this.appendTokenToHeader())

  }
  viewDishes(){
    return this.http.get(`${this.SERVER_URL}/user/viewdishes`)

  }
  getspecificdish(id:any){
    return this.http.get(`${this.SERVER_URL}/get-dish/${id}`)

  }
  addPlan(data:any){
    return this.http.post(`${this.SERVER_URL}/addplan`,data,this.appendTokenToHeader())
  }

  getMealplan(){
    return this.http.get(`${this.SERVER_URL}/getplan`,this.appendTokenToHeader())
  }

  deleteMealplan(id:any){
    return this.http.delete(`${this.SERVER_URL}/plandelete/${id}`,this.appendTokenToHeader())    
  }

  deleteadminDish(id:any){
    return this.http.delete(`${this.SERVER_URL}/deleteAdmin/${id}`,this.appendTokenToHeader())    
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("Token")
  }

  viewmyDish(){
    return this.http.get(`${this.SERVER_URL}/user/userDish`,this.appendTokenToHeader())

  }
 
  

}
