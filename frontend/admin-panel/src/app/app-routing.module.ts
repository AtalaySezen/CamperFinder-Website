import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditblogComponent } from './components/editblog/editblog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'Kamp Alanları',canActivate:[AuthGuard]},
  {path:'blog',component:EditblogComponent,title:'Blog',canActivate:[AuthGuard]},
  {path:'placedetail',component:PlacedetailComponent,title:'Kamp Detay',canActivate:[AuthGuard]},
  {path:'',component:LoginComponent,title:'CamperFinder Admin Panel'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
