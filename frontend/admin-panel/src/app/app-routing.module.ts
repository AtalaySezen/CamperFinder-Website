import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { CampPlacesComponent } from './pages/camp-places/camp-places.component';

const routes: Routes = [
  { path: "home", component: CampPlacesComponent, title: "Home", canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, title: "CamperFinder Login" },
  { path: "", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





