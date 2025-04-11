import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  constructor(public global :GlobalService , private router : Router){
    console.log(this.global.dataOnLocalStorage[1]);
  }
  
  selectedValue?:string;
  handleSelect(e:HTMLSelectElement){
    this.selectedValue = e.value;
    console.log(this.selectedValue);
    this.global.selectedOption = this.selectedValue;
    // this.router.navigateByUrl('home/:selectedValue')
    this.router.navigateByUrl('home/:selectedOption')
  }



}
