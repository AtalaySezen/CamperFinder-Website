import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MailComponent } from './components/mail/mail.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent, title: "Home",canActivate:[AuthGuard] },
  { path: "login", component: LoginComponent, title: "CamperFinder Login" },
  { path: "blog", component: BlogComponent, title: "CamperFinder Blog",canActivate:[AuthGuard] },
  { path: "mail", component: MailComponent, title: "CamperFinder Mail",canActivate:[AuthGuard] },
  { path: "placedetail", component: PlacedetailComponent, title: "Place Detail",canActivate:[AuthGuard] },
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



