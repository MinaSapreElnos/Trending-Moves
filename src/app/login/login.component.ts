import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router) {}

  loginForm:FormGroup= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
  })

  apiError=''
  userToken:string=''
  login(loginForm:FormGroup){
    console.log(loginForm.value)
    this._AuthService.login(loginForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.message==='success'){
          localStorage.setItem('token',res.token) 
          this._AuthService.decodeToken()
            this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        console.log(err)
        this.apiError=err.error.message
        if(err.error.message==='Incorrect email or password'){
          this._Router.navigate(['/register'])
        }
      }
    })

  }

  
}
