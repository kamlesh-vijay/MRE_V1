import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavComponent } from './menunav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    MenunavComponent
  ],
  imports: [
    CommonModule,
   AppRoutingModule

  ],
  exports:[MenunavComponent]
})
export class MenuModule { }
