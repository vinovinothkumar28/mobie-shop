import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-view-configuration',
  templateUrl: './view-configuration.component.html',
  styleUrls: ['./view-configuration.component.css']
})
export class ViewConfigurationComponent implements OnInit {

  dummy ="1,2,3,";

  check_compare:any;
  compare_selected = false;

  pics:any;
  public color_pics:any;
  public __baseUrl = "http://192.168.1.100/mobile-tracker/";
  public imageUrl;
  public configs:any;
  public relatedMobiles;
  public mobile_id;



  constructor( private route: ActivatedRoute, private _services: ServiceService ) { }

  ngOnInit(): void { 
    let id = this.route.snapshot.paramMap.get('id');  
    this.getMobileConfig(id);
   
 
  }

  getMobileConfig(id)
  {
   
    // let comp = window.localStorage.getItem("compareId");
    // if(comp != null)
    // {
    //   this.check_compare = JSON.parse(comp);
    //   this.compare_selected = this.check_compare.includes(id);
    // }
    // else{
    //   window.localStorage.setItem("compareId",JSON.stringify(""));
    // }
  
    this._services.mobileconfig(id).subscribe((data: any )=>  {

      this.configs = data.specs;
     // console.log(this.configs);
      this.pics = data.specs.pics.split(','); 
      console.log(this.pics);
      this.imageUrl = this.__baseUrl+this.pics[0];
      this.color_pics = data.color_pics;
      //console.log(this.color_pics);
      this.getMobiles(data.specs.brand_name);
      this.mobile_id = id;
    });
  }

  onChangeImage(pic)
  {
    this.imageUrl = this.__baseUrl+pic;
  }

  getMobiles(bname)
  {
    
    this._services.getMobiles(bname).subscribe((data: any )=>  {
      //console.log(data);
      this.relatedMobiles = data;

    });
  }


  onClickRelatedMobile(mobile)
  {
    this.getMobileConfig(mobile.id);
  }

  onClickCompare(event,mobileid)
  {
    //this.filter = !this.filter;
    alert(event + mobileid);

    localStorage.setItem("compareItems",JSON.stringify(mobileid));
     
  }

}
