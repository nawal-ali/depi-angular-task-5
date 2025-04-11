import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(public global :GlobalService){
    if(this.global.dataOnLocalStorage?.hasOwnProperty(this.global.selectedOption)){
      console.log('yes');
    }
    else console.log('no');
  }
}
