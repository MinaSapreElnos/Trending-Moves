
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router) {}

  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]/)])
  })


  apiError:string=''
  register(registerForm:FormGroup){
    console.log(registerForm.value)
    this._AuthService.register(registerForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.apiError=res.message
        if(this.apiError==='success'){
          this._Router.navigate(['/home'])
        }
      },

      error:(err)=>{
        console.log(err)
        this.apiError=err.error.message
        console.log(this.apiError)
        
      }
      
      
    })
  }

}
