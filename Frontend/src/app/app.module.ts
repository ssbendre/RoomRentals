import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DemoMaterialModule } from "./lib/material/material-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OwnerHomeComponent } from './pages/owner-home/owner-home.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { BrandBandComponent } from './components/brand-band/brand-band.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateCardComponent } from './components/create-card/create-card.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, CardsComponent, FilterComponent, LoginComponent, HomeComponent, OwnerHomeComponent, NoContentComponent, BrandBandComponent, SignupComponent, CreateCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
