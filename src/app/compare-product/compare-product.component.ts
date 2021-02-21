import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.css']
})
export class CompareProductComponent implements OnInit {

  _baseUrl = "http://localhost/mobile-tracker/";

  compare_array;

  public mobile_1:any;
  public mobile_2:any;

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


  mobile_2_model;
  mobile_2_display;
  mobile_2_processor;
  mobile_2_storage;
  mobile_2_ram;
  mobile_2_camera;
  mobile_2_cameraFront;
  mobile_2_battery;
  mobile_2_operatingSystem;
  mobile_2_weight;
  mobile_2_sim;
  mobile_2_fingerprint;
  mobile_2_price;
  mobile_2_brand;
  mobile_2_image;
  mobile_2_colors;



  constructor( private _services: ServiceService) { }

  ngOnInit(): void {
    this.getcompare();
  }

  getcompare()
  {
    this.compare_array = JSON.parse(window.localStorage.getItem("compareItems"));

    this._services.mobileCompare(this.compare_array[0],this.compare_array[1]).subscribe((data: any )=>  {

        console.log(data);

        

       this.mobile_1_model = data.mobile_1.model_name;
       this.mobile_1_display = data.mobile_1.display;
       this.mobile_1_processor = data.mobile_1.processor;
       this.mobile_1_storage = data.mobile_1.storage;
       this.mobile_1_ram = data.mobile_1.ram;
       this.mobile_1_camera = data.mobile_1.camera;
       this.mobile_1_cameraFront = data.mobile_1.camera_front_pixel;
       this.mobile_1_battery = data.mobile_1.battery;
       this.mobile_1_operatingSystem = data.mobile_1.operating_system;
       this.mobile_1_weight = data.mobile_1.weight;
       this.mobile_1_sim = data.mobile_1.sim_features;
       this.mobile_1_fingerprint = data.mobile_1.fingerprint;
       this.mobile_1_price = data.mobile_1.price;
       this.mobile_1_brand = data.mobile_1.brand_name;
       this.mobile_1_colors = data.mobile_1.color_pics;

      // this.mobile_1_image = data.mobile_1.image;


       this.mobile_2_model = data.mobile_2.model_name;
       this.mobile_2_display = data.mobile_2.display;
       this.mobile_2_processor = data.mobile_2.processor;
       this.mobile_2_storage = data.mobile_2.storage;
       this.mobile_2_ram = data.mobile_2.ram;
       this.mobile_2_camera = data.mobile_2.camera;
       this.mobile_2_cameraFront = data.mobile_2.camera_front_pixel;
       this.mobile_2_battery = data.mobile_2.battery;
       this.mobile_2_operatingSystem = data.mobile_2.operating_system;
       this.mobile_2_weight = data.mobile_2.weight;
       this.mobile_2_sim = data.mobile_2.sim_features;
       this.mobile_2_fingerprint = data.mobile_2.fingerprint;
       this.mobile_2_price = data.mobile_2.price;
       this.mobile_2_brand = data.mobile_2.brand_name;
       this.mobile_2_colors = data.mobile_2.color_pics;
      // this.mobile_2_image = data.mobile_2.image;



        this.mobile_1 = data.mobile_1;
        this.mobile_2 = data.mobile_2;

        this.mobile_1_model = data.mobile_1.model_name;
        this.mobile_2_model = data.mobile_2.model_name;
      
        this.mobile_1_image = this._baseUrl+data.mobile_1.image;
        this.mobile_2_image = this._baseUrl+data.mobile_2.image;


    });
  }

  onClickMobileImageChange(mob,img:any)
  {
    if(mob=="1")
    {
      this.mobile_1_image = this._baseUrl+img;
    }
    else
    {
      this.mobile_2_image = this._baseUrl+img;
    }
    
  }



}
