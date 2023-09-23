import { Component, OnInit } from '@angular/core';
import { TrandingService } from '../tranding.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  implements OnInit{
  movies:any[]=[]
  mediaType='movie'
  pages:number[]=[]
  term:string=''
  constructor(private _TrandingService:TrandingService){
    this.pages=new Array(10).fill("mina").map((el,index)=>index+1)
  }

  ngOnInit(): void {
    this.getMovies(1)
  }

  getMovies(page:number){
    this._TrandingService.trandingMovies2(page).subscribe({
      next:(res)=>{
        console.log(res.results)
        this.movies=res.results
      }
    })
  }


  searchForMovie(){
   if(this.term){
    this._TrandingService.getSearshMovie(this.term).subscribe({
      next:(res)=>{
          console.log(res.results)
          this.movies=res.results
      }
    })
   }else{
    this.getMovies(1)
   }
  }

}
