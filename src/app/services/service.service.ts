import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public _baseUrl = "http://192.168.0.108/mobile-tracker/";

  constructor( private http:HttpClient ) { }

  getBaseUrl()
  {
    return this._baseUrl;
  }

  getMobiles(brand_name) 
  {
    return this.http.get<any>(this._baseUrl+"view_mobiles.php?brand_name="+brand_name+"");
  }

  mobileconfig(mobile_id)
  {
    return this.http.get<any>(this._baseUrl+"view_mobile_config.php?id="+mobile_id)
  }

}
