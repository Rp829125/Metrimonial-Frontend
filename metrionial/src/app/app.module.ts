import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrideListComponent } from './bride-list/bride-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrideComponent } from './bride/bride.component';
import {PanelComponent} from './admin/panel/panel.component';
import {RegistrationComponent} from './admin/registration/registration.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegistrationListComponent } from './admin/registration-list/registration-list.component';
import { EnquiriesListComponent } from './admin/enquiries-list/enquiries-list.component';
import { RiligionManagementComponent } from './admin/riligion-management/riligion-management.component';
import { CastManagementComponent } from './admin/cast-management/cast-management.component';
import { StateManagementComponent } from './admin/state-management/state-management.component';
import { CityManagementComponent } from './admin/city-management/city-management.component';
import { EducationComponent } from './admin/education/education.component'


const adminRoute = 
  {path:"adminpanel",component:PanelComponent}



const appRoutes:Routes = [
  {path:"adminpanel",component:PanelComponent, children:[

    {path:"", component:DashboardComponent, title:"Dashboard"},
    {path:"registartion",component:RegistrationComponent,title:"Registartion"},
    {path:"registartion-list",component:RegistrationListComponent,title:"Registartion-List"},
    {path:"enquires",component:EnquiriesListComponent,title:"Enquiries"},
    {path:"Riligion",component:RiligionManagementComponent,title:"Riligion Management"},
    {path:"cast",component:CastManagementComponent,title:"Cast Management"},
    {path:"state",component:StateManagementComponent,title:"Sate Management"},
    {path:"city",component:CityManagementComponent,title:"City Management"},
    {path:"Education",component:EducationComponent,title:"Education Management"},
    
    
  ]},

  {path:"", component:AppComponent, title:"Home", children:[

    {path:"", component:HeaderComponent, title:"Home", children:[
      
      {path:"", component:HomeComponent, title:"Home"},
      {path:"bride", component:BrideComponent, title:"Bride",children:[

        {path:"", component:BrideListComponent,title:"Bride List"},
        {path:"details/:id", component:PersonDetailsComponent, title:"Person Details"},
        
        ]},
    ]},   
    

  ]},
  
 
 
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BrideListComponent,
    PersonDetailsComponent,
    PageNotFoundComponent,
    BrideComponent,
    PanelComponent,
    RegistrationComponent,
    DashboardComponent,
    RegistrationListComponent,
    EnquiriesListComponent,
    RiligionManagementComponent,
    CastManagementComponent,
    StateManagementComponent,
    CityManagementComponent,
    EducationComponent
  
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
