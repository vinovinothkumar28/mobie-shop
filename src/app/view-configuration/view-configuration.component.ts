import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-view-configuration',
  templateUrl: './view-configuration.component.html',
  styleUrls: ['./view-configuration.component.css']
})
export class ViewConfigurationComponent implements OnInit {

  dummy =[];
  


  d1:any;
  // sub1:[];
  // sub2;

  checked=false;
  compare_array = [];


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

  onClickCompare(event)
  {
  //   if(JSON.parse(localStorage.getItem("dummy"))==null)
  //   alert("Compare [0]");
  //  else
  //   alert("Compare ["+JSON.parse(localStorage.getItem("dummy")).length+"]");
    

    if(event)
    {
      let dum1 = (window.localStorage.getItem("compareItems"));
      this.compare_array = JSON.parse(dum1);
      console.log(this.compare_array);
      if(this.compare_array.length < 2)
      {
        this.compare_array.push(""+this.mobile_id);
        window.localStorage.setItem("compareItems",JSON.stringify(this.compare_array));
      }
      else
      {
        this.checked = false;
        alert("only 2 mobs are allowed to compare");

      }
      
    }
    else
    {
      this.compare_array = JSON.parse(window.localStorage.getItem("compareItems"));
      if(this.compare_array.length == 1)
      {
        this.compare_array.pop();
      }
      else{
        
        this.compare_array.splice((this.compare_array.indexOf(this.mobile_id),1));
      }
     
      window.localStorage.setItem("compareItems",JSON.stringify(this.compare_array));
      this.checked= false;
      
    }
    //this.filter = !this.filter;
    // alert(event + mobileid);
    
    //  this.dummy.push(mobileid);
    //  localStorage.setItem("dummy",JSON.stringify(this.dummy));
 
//     if(parseInt(localStorage.getItem("CompareCount"))==0 || localStorage.getItem("CompareCount")==null)
//     {localStorage.setItem("CompareMobile1",JSON.stringify(mobileid));
//     localStorage.setItem("CompareCount",JSON.stringify(1));
//   }
//     else if(parseInt(localStorage.getItem("CompareCount"))==1)
//    { localStorage.setItem("CompareMobile2",JSON.stringify(mobileid));
//     localStorage.setItem("CompareCount",JSON.stringify(2));
// }else
// { alert("count exited"); }


     
  }

}
