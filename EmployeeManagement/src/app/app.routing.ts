import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { ListComponent } from './Employee/List/list.component';
import { EmployeeRegister } from './Employee/Registration/Registeration.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'EmployeeRegister',
        pathMatch: 'full',
    },
    {
        path: 'EmployeeList',
        component: ListComponent
      //  data: { pageTitle: 'Employee List' }
    },
    {
        path: 'EmployeeRegister',
        component: EmployeeRegister
      //  data: { pageTitle: 'Employee Register' }
    },
    {
        path: 'sss',
        component: HomeComponent
      //  data: { pageTitle: 'Home' }
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }