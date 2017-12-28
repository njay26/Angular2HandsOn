import { Component, Input, Output } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

import { EmployeeService } from '../employee.service'



@Component({
    selector: 'employee-register',
    templateUrl: './Registeration.component.html'
})

export class EmployeeRegister {
    constructor(private _fb: FormBuilder, private _employeeService: EmployeeService) { }

    @Input()
    formHeading: string;
    complexForm: FormGroup;

    lastName: string='';
    firstName: string='';
    designation: string = '';
    status: string='Registration is not yet done!'

    reset(): void {
        this.firstName = this.lastName = this.designation = '';
        this.status = 'Registration is not yet done!'
    }


    createEMployee(): void{
        var data = {};
        data.FirstName = this.firstName;
        data.LastName = this.lastName;
        data.Designation = this.designation;

        if (this.firstName.trim() != "" && this.lastName.trim() != "" && this.designation.trim() != "") {

            this._employeeService.Register(data)
                .subscribe((data) => {
                    console.log(data);
                    this.status = 'Successfully registered!'
                });
        }
    }
}