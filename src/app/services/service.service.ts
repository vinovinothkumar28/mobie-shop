import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public _baseUrl = "http://localhost/mobile-tracker/";

  constructor( private http:HttpClient ) { }

  getBaseUrl()
  {
    return this._baseUrl;
  }

  getMobiles(brand_name) 
  {
    return this.http.get<any>(this._baseUrl+"view_mobiles.php?brand_name="+brand_name+"");
  }

  getRelatedMobiles(brand_name,mobile_id)
  {
    return this.http.get<any>(this._baseUrl+"view_related_mobiles.php?brand_name="+brand_name+"&mobile_id="+mobile_id);
  }

  mobileconfig(mobile_id)
  {
    return this.http.get<any>(this._baseUrl+"view_mobile_config.php?id="+mobile_id)
  }
  mobileCompare(id1,id2)
  {
    return this.http.get<any>(this._baseUrl+"mobile_compare.php?id_1="+id1+"&id_2="+id2);
  }

  getCompareMobileNames(id1,id2,lenth): Observable<any>
  {
    return this.http.get<any>(this._baseUrl+"mobile_compare_footer.php?id_1="+id1+"&id_2="+id2+"&count="+lenth);
  }

}
