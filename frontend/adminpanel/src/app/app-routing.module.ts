import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "login", component: LoginComponent, title: "Login" },
  { path: "blog", component: BlogComponent, title: "Blog" },
  { path: "", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { path: 'home', component: HomeComponent, title: 'Kamp Alanları', canActivate: [AuthGuard] },
//   { path: 'blog', component: EditblogComponent, title: 'Blog', canActivate: [AuthGuard] },
//   { path: 'placedetail', component: PlacedetailComponent, title: 'Kamp Detay', canActivate: [AuthGuard] },
//   { path: 'settings', component: SettingsComponent, title: 'Ayarlar', canActivate: [AuthGuard] },
//   { path: '', component: LoginComponent, title: 'CamperFinder Yönetim Paneli' },
//   { path: 'create-article', component: CreateArticleComponent, title: 'Blog Editör' }
// ];



