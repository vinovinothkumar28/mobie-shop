import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';




@Component({
  selector: 'app-view-configuration',
  templateUrl: './view-configuration.component.html',
  styleUrls: ['./view-configuration.component.css']
})
export class ViewConfigurationComponent implements OnInit {

  compareMobiles= JSON.parse(window.localStorage.getItem("compareItems"));

  mobile_1_model;
  mobile_1_display;
  mobile_1_processor;
  mobile_1_storage;
  mobile_1_ram;
  mobile_1_camera;
  mobile_1_cameraFront;
  mobile_1_battery;
  mobile_1_operatingSystem;
  mobile_1_weight;
  mobile_1_sim;
  mobile_1_fingerprint;
  mobile_1_price;
  mobile_1_brand;
  mobile_1_image;
  mobile_1_colors;

  dummy =[];
  


  d1:any;
  checked=false;
  compare_array = [];


  pics:any;
  public color_pics:any;
  public __baseUrl = "http://localhost/mobile-tracker/";
  public imageUrl;
  public configs:any;
  public relatedMobiles;
  public mobile_id;



  constructor( private route: ActivatedRoute, private _services: ServiceService, private router: Router, private _location: Location, private dialog: MatDialog ) { }

  ngOnInit(): void { 

    let localStore = localStorage.getItem("compareItems");
    if(localStore == null)
    {
      let data = [];
      window.localStorage.setItem("compareItems",JSON.stringify(data));
      this.compareMobiles= JSON.parse(window.localStorage.getItem("compareItems"));
    }

    setInterval(() =>{
     
      
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compareMobiles = JSON.parse(dum1);
      //this.getmobilename();
      

    },1000);




    let id = this.route.snapshot.paramMap.get('id');  
    this.getMobileConfig(id);
   
 
  }

  getMobileConfig(id)
  {
   
    this._services.mobileconfig(id).subscribe((data: any )=>  {

      this.configs = data.specs;

      this.mobile_1_model =data.specs.model_name
      this.mobile_1_display =data.specs.display
      this.mobile_1_processor =data.specs.processor
      this.mobile_1_storage =data.specs.internal_storage
      this.mobile_1_ram =data.specs.ram
      this.mobile_1_camera =data.specs.camera
      this.mobile_1_cameraFront =data.specs.camera_front_pixel
      this.mobile_1_battery =data.specs.battery
      this.mobile_1_operatingSystem =data.specs.operating_system
      this.mobile_1_weight =data.specs.weight
      this.mobile_1_sim =data.specs.sim_features
      this.mobile_1_fingerprint =data.specs.fingerprint_sensors
      this.mobile_1_price =data.specs.price
      this.mobile_1_brand =data.specs.brand_name
     



     // console.log(this.configs);
      this.pics = data.specs.pics.split(','); 
      console.log(this.pics);
      this.imageUrl = this.__baseUrl+this.pics[0];
      this.color_pics = data.color_pics;
      //console.log(this.color_pics);
      this.getMobiles(data.specs.brand_name,id);
      this.mobile_id = id;

      this.compareMobiles= JSON.parse(window.localStorage.getItem("compareItems"));
      if( (JSON.parse(window.localStorage.getItem("compareItems"))).includes(id) )
      {
        this.checked = true;
      }
      else{
        this.checked = false;
      }



    });

  }

  onChangeImage(pic)
  {
    this.imageUrl = this.__baseUrl+pic;
  }

  getMobiles(bname,id)
  {
    
    this._services. getRelatedMobiles(bname,id).subscribe((data: any )=>  {
      //console.log(data);
      this.relatedMobiles = data;


    });
  }


  onClickRelatedMobile(mobile:any)
  {
    
    this.router.navigate(['/viewConfig',mobile.id]);

  //   this.router.navigateByUrl('/viewConfig/:id', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/viewConfig',mobile.id]);
  // });
   
   // this.router.navigate([decodeURI(this._location.path())]);
    //window.location.reload();
    // this.router.navigateByUrl('/viewConfig',{skipLocationChange: true}).then(() =>

    // this.router.navigate(['/viewConfig',mobile.id])
    
    // );
    //this.getMobileConfig(mobile.id);

    setTimeout(function(){
       location.reload(); 
      }, 500);
   
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
