import { Component, OnInit } from '@angular/core';
import { TrandingService } from '../tranding.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent  implements OnInit{
  tvData:any[]=[]
  pages:number[]=[]
  term:string=''
  mediaType:string='tv'
  pageCount:number=1

  constructor(private _TrandingService:TrandingService){
    this.pages=new Array(10).fill("mina").map((el,index)=>index+1)
  }


  ngOnInit(): void {
    this.getTvPopular(1)
  }



  getTvPopular(page:number){
    this.pageCount=page
    if(this.term){
      this.searsh()
    }else{
      this._TrandingService.getTvPopular(this.pageCount).subscribe({
        next:(res)=>{
            console.log(res.results)
            this.tvData=res.results
        }
      })
    }
    
  }


  searsh(){
    
    if(this.term){
      this._TrandingService.getSearshTv(this.term ,this.pageCount).subscribe({
        next:(res)=>{
          console.log(res.results)
          this.tvData=res.results
        }
      })

    }else{
      this.getTvPopular(1)
    }
    
  }


  

}
