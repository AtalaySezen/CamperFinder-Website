import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Kamp Alanları', canActivate: [AuthGuard] },
  { path: 'blog', component: EditblogComponent, title: 'Blog', canActivate: [AuthGuard] },
  { path: 'placedetail', component: PlacedetailComponent, title: 'Kamp Detay', canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, title: 'Ayarlar', canActivate: [AuthGuard] },
  { path: '', component: LoginComponent, title: 'CamperFinder Yönetim Paneli' },
  { path: 'create-article', component: CreateArticleComponent, title: 'Blog Editör' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


