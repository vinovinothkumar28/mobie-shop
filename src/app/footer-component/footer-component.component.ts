import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  compareDeviceCount;

  count1 = false;
  count2 = false;

  constructor() { }

  ngOnInit(): void {
    this.getCompareCount();
    setInterval(() =>{
      this.getCompareCount();

    },1000);
   
  }
  goBack()
  {
    window.history.back();
  }

  getCompareCount()
  {
    this.compareDeviceCount = JSON.parse(window.localStorage.getItem("compareItems")).length;
    if(this.compareDeviceCount >= 1)
    {
      this.count1 = true;
    }
    else
    {
      this.count1 = false;
    }

    if(this.compareDeviceCount < 2)
    {
      this.count2 = true;
    }
    else
    {
      this.count2 = false;
    }

  }

}
