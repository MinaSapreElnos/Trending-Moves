import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActorsComponent } from './actors/actors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthgurdGuard } from './gurds/authgurd.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:'' , redirectTo:'register',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthgurdGuard],component:HomeComponent},
  {path:'movies' ,canActivate:[AuthgurdGuard], component:MoviesComponent},
  {path:'tv' , canActivate:[AuthgurdGuard], component:TvShowsComponent},
  {path:'details/:id/:mediaType',canActivate:[AuthgurdGuard],component:DetailsComponent},
  {path:'actors' , canActivate:[AuthgurdGuard], component:ActorsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
