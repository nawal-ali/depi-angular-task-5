import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface CategoryItem {
  name: string;
  desc: string;
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  selectedOption:any;
  dataOnLocalStorage:any;
  data:{ [key: string]: CategoryItem[] } = {
    food :[
      {
        name: 'cake',
        desc: 'some description'
      },
      {
        name: 'rice',
        desc: 'some description'
      },
      {
        name: 'meat',
        desc: 'some description'
      },
      {
        name: 'chicken',
        desc: 'some description'
      }
    ],
    drink:[
      {
        name: 'water',
        desc: 'some description'
      },
      {
        name: 'mango juice',
        desc: 'some description'
      },
      {
        name: 'pepsi',
        desc: 'some description'
      },
      {
        name: 'mix berries juice',
        desc: 'some description'
      }
    ]
  }

  constructor(){
    localStorage.setItem('data',JSON.stringify(this.data));
    this.dataOnLocalStorage = localStorage.getItem('data');
    this.dataOnLocalStorage = JSON.parse(this.dataOnLocalStorage);
    console.log(this.data);
  }
}
