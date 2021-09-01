import { Component, OnInit, Output } from '@angular/core';
import { ApidataService } from './apimodule/apidata.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  constructor(private ApiService: ApidataService) {

  }
  async ngOnInit() {
  }

}
