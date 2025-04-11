import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {


  constructor(public global : GlobalService,private router : Router){}

  catName:any;
  proName:any;
  proDesc:any;
  selectedCat?:string;
  obj:{name:string,desc:string} = {name:'',desc:''}
  catAdded = false;
  exist = false;
  proAdded = false;
  addCat(){
    console.log(this.catName);
    if(this.global.dataOnLocalStorage?.hasOwnProperty(this.catName)){
      this.exist = true;
      return
    }
    this.global.dataOnLocalStorage ={
      ...this.global.dataOnLocalStorage,
      [this.catName]:[]
    }
    localStorage.setItem('data',JSON.stringify(this.global.dataOnLocalStorage))
    this.catAdded = true;
    console.log(this.global.dataOnLocalStorage);
  }
  addPro(e:HTMLSelectElement){
    this.selectedCat = e.value;
    this.global.selectedOption = this.selectedCat;
    this.obj.name = this.proName;
    this.obj.desc = this.proDesc;
    console.log(this.obj);
    this.global.dataOnLocalStorage[this.selectedCat].push(this.obj);
    this.proAdded = true;
  }
  routeToCat(){
    console.log(this.selectedCat);
    this.router.navigateByUrl('home/:selectedOption');
  }
}
