import { Component, OnInit } from '@angular/core';
import { TrandingService } from '../tranding.service';
import { ActivatedRoute } from '@angular/router';
TrandingService
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private _TrandingService:TrandingService ,private _ActivatedRoute:ActivatedRoute){}

id:string=''
mediaType:string='person'
persons:any[]=[]

ngOnInit(): void {
//  let  {id,mediaType}=this._ActivatedRoute.snapshot.params
//  this.id=id
//  this.mediaType=mediaType

 this.getPeaple()
}

  getPeaple(){
    this._TrandingService.trandingParson(this.mediaType).subscribe({
      next:(res)=>{
        console.log(res.results)
        this.persons=res.results
      }})
  }


  
}
