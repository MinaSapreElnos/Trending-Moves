import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrandingService } from '../tranding.service';
import { ActivatedRoute } from '@angular/router';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  constructor(private _TrandingService:TrandingService,private _ActivatedRoute:ActivatedRoute){}

movieDetils:any
smailerMovies:any[]=[]
media_type:string=''

  ngOnInit(): void {
    let {id ,mediaType}=this._ActivatedRoute.snapshot.params; 
    this.media_type=mediaType
    this._TrandingService.getMovieDetils(mediaType,id).subscribe({
      next:(res)=>{
        console.log(res)
        this.movieDetils=res
        
      }
    })

    this._TrandingService.getSmilerMovies(mediaType,id).subscribe({
      next:(res)=>{
        this.smailerMovies=res.results
        console.log(res.results)
      }
    })
  }

  getMovieDetils(mediaType:string,id:string){
    this._TrandingService.getMovieDetils(mediaType,id).subscribe({
      next:(res)=>{
        console.log(res)
        this.movieDetils=res 
        
      }
    })
    

    this._TrandingService.getSmilerMovies(mediaType,id).subscribe({
      next:(res)=>{
        this.smailerMovies=res.results
        console.log(res.results)
      }
    })
  }



  }



 
  


