import { Component, OnInit } from '@angular/core';
import { TrandingService } from '../tranding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  movies:any[]=[]
  tvs:any[]=[]
  persons:any[]=[]

  constructor(private _TrandingService:TrandingService){}


  ngOnInit(): void {
    this._TrandingService.trandingMovies('movie').subscribe({
      next:(res)=>{
        // console.log(res.results)
        this.movies=res.results
      },
    })

    this._TrandingService.trandingTv('tv').subscribe({
      next:(res)=>{
        // console.log(res.results)
        this.tvs=res.results
      }
    })


    this._TrandingService.trandingTv('person').subscribe({
      next:(res)=>{
        console.log(res.results)
        this.persons=res.results
      }
    })


}

}
