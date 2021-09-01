import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareddataComponent } from './shareddata.component';
import {MenuModule} from './menu/menu.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApimoduleModule } from './apimodule/apimodule.module';
import { AgGridModule } from 'ag-grid-angular';
import { WeeklydataComponent } from './weeklydata.component';
import { MonthlydataComponent } from './monthlydata.component';
import { HelpComponent } from './help.component';
import { ContactusComponent } from './contactus.component';
import { AboutusComponent } from './aboutus.component';



@NgModule({
  declarations: [
    ShareddataComponent,
    WeeklydataComponent,
    MonthlydataComponent,
    HelpComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    AppRoutingModule,
    ApimoduleModule,
    AgGridModule
  ],
  exports:[ShareddataComponent,WeeklydataComponent,MonthlydataComponent,HelpComponent,ContactusComponent]
})
export class SharedModule { }
