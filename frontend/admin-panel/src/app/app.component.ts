import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-panel';

  ngOnInit(){
  }
  

  // userLogged(){
  //   console.log(this.isLogged,"islogged");
  //   if(localStorage.getItem('isLogged') == 'true'){
  //     this.isLogged == true;
  //   }else{
  //     this.isLogged == false;
  //   }
  // }



}
