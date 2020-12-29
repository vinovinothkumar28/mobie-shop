import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let localStore = localStorage.getItem("compareItems");
    if(localStore == null)
    {
      let data = [];
      window.localStorage.setItem("compareItems",JSON.stringify(data));
    }
    //console.log( JSON.parse(window.localStorage.getItem("compareItems")).length );

  }

}
