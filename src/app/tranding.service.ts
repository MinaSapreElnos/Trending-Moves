import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class TrandingService {

  constructor(private _HttpClient:HttpClient) { }


  //tranding movies//
  trandingMovies(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=48d62e7452a1f1a5e6018217ac27c50a`)
  }

  //get tranding TV //

  trandingTv(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=48d62e7452a1f1a5e6018217ac27c50a`)
  }

   //get tranding person//

  trandingParson(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=48d62e7452a1f1a5e6018217ac27c50a`)
  }


  //getMovieDetils//
  getMovieDetils(mediaType:string,id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US`)
  }


  //get smiler movies//

  getSmilerMovies(mediaType:string,id:string):Observable<any>{
   return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US`)
  }

  //tranding Movies//

trandingMovies2(page:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
}

getTrandingTv():Observable<any>{
return this._HttpClient.get('https://api.themoviedb.org/3/discover/tv?api_key=.......&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1')
}

getTvPopular(page:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
}

getSearshTv(term:string ,page:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/search/tv?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&page=${page}&query=${term}&include_adult=false`)
}

getSearshMovie(term:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&query=${term}&page=1&include_adult=false`)
}


}
