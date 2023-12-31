import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService, private _Router:Router){}

 ngOnInit(): void {
   this._AuthService.userData.subscribe({
    next:()=>{
      if(this._AuthService.userData!==null){
        this.isLogin=true
      }else{
        this.isLogin=false
      }
    }
   })
 }

 logOut(){
  localStorage.removeItem('token')
  this.isLogin=false
  this._Router.navigate(['/login'])
 }

}
