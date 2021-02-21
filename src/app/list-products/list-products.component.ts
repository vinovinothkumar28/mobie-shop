import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { ServiceService } from '../services/service.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  public brandName;
  
  compareMobiles= JSON.parse(window.localStorage.getItem("compareItems"));     
  
   
   mobile:any; 
  public mobiles: any;
  

  public __baseUrl = "http://localhost/mobile-tracker/";

  constructor(  private _services: ServiceService, public route:ActivatedRoute, private router: Router, private dialog: MatDialog ) { }

  ngOnInit(): void {

    let localStore = localStorage.getItem("compareItems");
    if(localStore == null)
    {
      let data = [];
      window.localStorage.setItem("compareItems",JSON.stringify(data));
    }
    this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));

    setInterval(() =>{
     
      
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
      //this.getmobilename();
      

    },1000);
    
     
    this.getMobiles();

  }

selectmobile()
{ 
   this.mobile[1]=true;

} 

  getMobiles()
  {
   


    let bname = this.route.snapshot.paramMap.get('brandName');
    this.brandName = bname;
    window.localStorage.setItem("selectedBrand",this.brandName);
    this._services.getMobiles(this.brandName).subscribe((data: any )=>  {
      
      this.mobiles = data;
     // console.log(this.mobiles);

    });
  }

  onClickMobile(mobile)
  {
    //alert(category);
    this.router.navigate(['/viewConfig',mobile.id]);
  }


  campareOnClick(e,mid1)
  { 
    
    let dum1 = JSON.parse(window.localStorage.getItem("compareItems"));
    // console.log("a"+dum1.includes(mid1)+"as"+dum1.length);
    if(!dum1.includes(mid1) && dum1.length>=2)
    { e.preventDefault(); 
      let msg = "You Can't Compare More Than Two Mobiles..";
        this.dialog.open(DialogExampleComponent, {data: {message: msg}});
    }

  }

  onClickCompare(event,mid)
  {
 
    if(event.checked)
    {
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
        
      if(this.compareMobiles.length < 2)
      {
        this.compareMobiles.push(mid);
       
        window.localStorage.setItem("compareItems",JSON.stringify(this.compareMobiles));

        this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));

      }  
    }
    else
    {
      this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
      let current_postion=this.compareMobiles.indexOf(mid);
   
      this.compareMobiles.splice(this.compareMobiles.indexOf(mid),1);
     
      window.localStorage.setItem("compareItems",JSON.stringify(this.compareMobiles));
      this.compareMobiles = JSON.parse(window.localStorage.getItem("compareItems"));
     
            
    }
  
  }




}
