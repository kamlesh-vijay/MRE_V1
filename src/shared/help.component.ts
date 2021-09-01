import { Component, OnInit, Output } from '@angular/core';
import { ApidataService } from './apimodule/apidata.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  constructor(private ApiService: ApidataService) {

  }
  async ngOnInit() {
  }

}
