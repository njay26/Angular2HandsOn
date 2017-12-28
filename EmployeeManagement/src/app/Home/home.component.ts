import { Component } from "@angular/core"
import { Router, ActivatedRoute, Params } from "@angular/router"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    activeEmployeeListTab: string;
    activeEmployeeRegistrationTab: string = 'active';

 
    constructor(private _router: Router) {
        if (location.href.includes("EmployeeList")) {
            this.activateEmployeeListTab();
        }
           
    }

    activateEmployeeRegistrationTab(): void {
        this.activeEmployeeRegistrationTab = 'active';
        this.activeEmployeeListTab = null;
        this._router.navigate(['EmployeeRegister']);
    }

    activateEmployeeListTab(): void {
        this.activeEmployeeRegistrationTab = null;
        this.activeEmployeeListTab = 'active';
        this._router.navigateByUrl('EmployeeList');
    }

    alertMessage(value: any): void {
        alert('sghdf');
    }
}


