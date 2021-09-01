
import { Component, OnInit, Output } from '@angular/core';
import { ApidataService } from './apimodule/apidata.service';



@Component({
  selector: 'app-shareddata',
  templateUrl: './shareddata.component.html',
  styleUrls: ['./shareddata.component.css']
})
export class ShareddataComponent {
  
  Arraysymname:any = [];
  selected = "----";
  test="";
  
  async selectChange(filterVal: any) {
    if (filterVal != "-Select-")
    {
      let temp=[];
      temp=filterVal.value.toString().split('--');
      console.log('I am temp '+temp[0]);
      let response = await this.ApiService.showTasks(temp[0]);
      this.rowdata1 = response.final_data;
      let t1 = response.final_data;
      let t2= response.timesdata;
       t1=[...t1,...t2];
       this.rowdata1=t1;
     
    //Array.Concat(response.timesdata,response.final_data);
     console.log(t2);
      this.symname = response.metadata["2. Symbol"]; 
      this.latest=response.metadata["3. Last Refreshed"];
      
    }

  }
        
public async submitFilter()
{
  var trm=((document.getElementById("search") as HTMLInputElement)).value;
  if(trm!=null)
 {
  
  let Sres = await this.ApiService.SearchData(trm);
    this.Srowdata1 = Sres.final_data;
    let res2:any=[];
    let res3:any=[];
    let res4:any=[];
   
for (const key in Sres.final_data) {
  if (Object.prototype.hasOwnProperty.call(Sres.final_data, key)) {
    res2[key] =Sres.final_data[key]["1. symbol"];
    res3[key] =Sres.final_data[key]["2. name"];
    res4[key]=res2[key]+"--"+res3[key];
   
    
  }
}
   // res2= Object.values(Sres.final_data[0]);
   this.Arraysymname = res4;
 }
  
}
  update(e: { target: { value: string; }; }){
    this.selected = e.target.value
  }
  rowdata1: any = [];
  Srowdata1: any = [];
  Arrayname: any = [];
  symname: any;
  latest: any;

  columnDefs = [
    {field: "0date", sortable: true, filter: true, headerName: "DateValue"},
    { field: "1open", sortable: true, filter: true, headerName: "Open" },
    { field: "2high", sortable: true, filter: true, headerName: "High" },
    { field: "3low", sortable: true, filter: true, headerName: "Low" },
    { field: "4close", sortable: true, filter: true, headerName: "Close" },
    { field: "6volume", sortable: true, filter: true, headerName: "Volume"}];

  
  constructor(private ApiService: ApidataService) {

  }
  async ngOnInit() {

    

  }

}




