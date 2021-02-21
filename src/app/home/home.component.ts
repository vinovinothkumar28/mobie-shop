import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elem;

  constructor() { }

  ngOnInit(): void {
  
   // document.documentElement.requestFullscreen();
    // this.elem = document.documentElement;
    // this.elem.webkitRequestFullscreen();
    // this.elem.requestFullscreen();
    // this.openFullscreen();

    // let localStore = localStorage.getItem("compareItems");
    // if(localStore == null)
    {
      let data = [];
      window.localStorage.setItem("compareItems",JSON.stringify(data));
    }
    //console.log( JSON.parse(window.localStorage.getItem("compareItems")).length );

  }


  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

}
