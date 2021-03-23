import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//süslü parantez içi bir objedir
  styleUrls: ['./app.component.css']//köşeli parantez array demek
})
export class AppComponent {
  title:string = 'northwind';
  user:string='İrem Yayman';
 
}
//datayı yönettiğimiz yer,angularda her şey class