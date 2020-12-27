import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-view-configuration',
  templateUrl: './view-configuration.component.html',
  styleUrls: ['./view-configuration.component.css']
})
export class ViewConfigurationComponent implements OnInit {

  pics:any;
  color_ary:any;
  public __baseUrl = "http://192.168.0.108/mobile-tracker/";
  public imageUrl;
  public configs:any;
  public relatedMobiles;



  constructor( private route: ActivatedRoute, private _services: ServiceService ) { }

  ngOnInit(): void { 
    let id = this.route.snapshot.paramMap.get('id');  
    this.getMobileConfig(id);
  }

  getMobileConfig(id)
  {
   
    this._services.mobileconfig(id).subscribe((data: any )=>  {

      this.configs = data;
      console.log(this.configs);
      this.pics = data.pics.split(','); 
    
     

    
      this.imageUrl = this.__baseUrl+this.pics[0];

      this.getMobiles(data.brand_name);

     

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

}
