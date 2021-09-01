import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ShareddataComponent} from '../shared/shareddata.component';
import { WeeklydataComponent } from 'src/shared/weeklydata.component';
import { MonthlydataComponent } from 'src/shared/monthlydata.component';
import { HelpComponent } from 'src/shared/help.component';
import { ContactusComponent } from 'src/shared/contactus.component';
import { AboutusComponent } from 'src/shared/aboutus.component';


const routes: Routes = [{ path: '', component: AppComponent, pathMatch: 'full' },
{ path: 'daily', component: ShareddataComponent },
{ path: 'weekly', component: WeeklydataComponent },
{ path: 'monthly', component: MonthlydataComponent },
{ path: 'help', component: HelpComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'aboutus', component: AboutusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
