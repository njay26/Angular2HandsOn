import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'

import { EmployeeService } from '../employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

    constructor(private _employeeService: EmployeeService) { }

    @Input()
    formHeading: string;
    @Output() textChangeForTitle: EventEmitter<any> = new EventEmitter<any>();
    employees: any;

    ngOnInit() {
        this.getEmployees();
    }

    getEmployees(): any {
        this._employeeService.GetEmployee()
            .subscribe(data => {
                console.log(data);
                this.employees = data
            });
    }

    listComponentLoad(): void {
        this.textChangeForTitle.emit("list component");
    }
    
}