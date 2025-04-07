import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products:any = [];
  constructor(private global :GlobalService){
    this.global.products().subscribe((res: any )=> {
      console.log(res);
      this.products = res.data;
      console.log('this ' + this.products);
    })
  }


}
