import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ListComponent } from './Employee/List/list.component';
import { EmployeeRegister } from './Employee/Registration/Registeration.component';

import { EmployeeService } from './Employee/employee.service'
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule, HttpModule],
    declarations: [AppComponent, HomeComponent, ListComponent, EmployeeRegister],
    bootstrap: [AppComponent],
    providers: [EmployeeService, FormBuilder]
})
export class AppModule { }
