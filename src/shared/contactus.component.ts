import { Component, OnInit } from '@angular/core';
import { ApidataService } from './apimodule/apidata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor(private ApiService: ApidataService) {

  }
  async ngOnInit() {
  }

}
