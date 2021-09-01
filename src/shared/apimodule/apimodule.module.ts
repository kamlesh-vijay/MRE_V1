import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApidataService} from './apidata.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:  [ApidataService]
})
export class ApimoduleModule { }
