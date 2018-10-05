import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas 


import { APP_ROUTES } from './app.routes';

//modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';





@NgModule({
  declarations: [
    

    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    //DashboardComponent,
    //ProgressComponent,
    //Graficas1Component,
    // PagesComponent,

    //NopagefoundComponent,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
