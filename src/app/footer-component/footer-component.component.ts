import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  compareDeviceCount;
  location_path_array:any;

  compareMobiles:any;

  count1 = false;
  count2 = false;
  compare_array:any;

  mobiles:any;
  

  constructor(private _services:ServiceService, private location: Location, private router: Router) { }

  ngOnInit(): void {

    console.log(this.location.path());
    let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
    this.getCompareCount();
    this.getmobilename();
    setInterval(() =>{
      this.getCompareCount();
      
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
      //this.getmobilename();
      

    },1000);


   // Timeout for Idle in 5 mins

    setTimeout(function(){ 
    // this.timeOutFunction();
    //alert("yes timeout")
    document.location.href = 'http://localhost/mobile-shop/';
    }, 300000);
   
  }

  timeOutFunction()
  {
    this.router.navigate(['listBrands']);
  }

  goBack()
  {
    this.location_path_array = (this.location.path()).split('/');

    if( this.location_path_array.includes("viewConfig") == true )
    {
      let bname = window.localStorage.getItem("selectedBrand");
      this.router.navigate(['/listProducts',bname]);
    }
    else if( this.location_path_array.includes("listProducts") == true  )
    {
      this.router.navigate(['/listBrands']);
    }
    else if( this.location_path_array.includes("listBrands") == true  )
    {
      this.router.navigate(['/']);
    }
    else{
      window.history.back();
    }
   
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

  getmobilename()
  {
    this.compare_array = JSON.parse(window.localStorage.getItem("compareItems"));
    let lenth =JSON.parse(window.localStorage.getItem("compareItems")).length;

    this._services.getCompareMobileNames(this.compare_array[0],this.compare_array[1],lenth).subscribe((data: any )=>  {

        console.log(data);
        this.mobiles = data;      
        
    

    });

  }




  onClickCompare(event,mid)
  {
  //  console.log("event status:"+event.checked);

    if(event.checked)
    {
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
        
      if(this.compareMobiles.length < 2)
      {
        this.compareMobiles.push(mid);
        //this.compareMobiles=this.compareMobiles.unique();
        window.localStorage.setItem("compareItems",JSON.stringify(this.compareMobiles));
        
        this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
        // console.log("After added"+this.compareMobiles);
      }  
    }
    else
    {
      this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
      let current_postion=this.compareMobiles.indexOf(mid);
      // console.log("position: "+current_postion);    
      this.compareMobiles.splice(this.compareMobiles.indexOf(mid),1);
      // console.log("temp datav2"+this.compareMobiles);
      window.localStorage.setItem("compareItems",JSON.stringify(this.compareMobiles));
      this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
      // console.log("After added"+this.compareMobiles);
            
    }
  
  }


  campareOnClick(e,mid1)
  { 
    
    let dum1 = JSON.parse(window.localStorage.getItem("compareItems"));
    // console.log("a"+dum1.includes(mid1)+"as"+dum1.length);
    if(!dum1.includes(mid1) && dum1.length>=2)
    { e.preventDefault(); alert("Can't add more than two movile in Campare list"); }

  }


  onClickClearAll()
  {
    this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
    this.compareMobiles = [];
    window.localStorage.setItem("compareItems",JSON.stringify(this.compareMobiles));

  }

}
