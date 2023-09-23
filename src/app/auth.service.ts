import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { 
    if(localStorage.getItem('token')!=null){
      this.decodeToken()
    }
  }


  //register API//
  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData)

  }

  //login API //

  login(userData:object):Observable<any>{
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)

  }

  //decode user token//
  userData= new BehaviorSubject(null)

  decodeToken(){
    let incodetoken=localStorage.getItem('token')||''
    let decodeToken:any=jwtDecode(incodetoken)
    this.userData.next(decodeToken)
  }
  


}
