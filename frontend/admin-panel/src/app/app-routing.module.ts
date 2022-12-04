import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'Kamp Alanları'},
  {path:'placedetail',component:PlacedetailComponent,title:'Kamp Detay'},
  {path:'',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
