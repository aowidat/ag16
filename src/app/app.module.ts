import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialImporterModule } from './material.module';
import { HomeComponent } from './page/home/home.component';
import { Error404Component } from './page/error404/error404.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { ItemComponent } from './page/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    LoginComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImporterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
