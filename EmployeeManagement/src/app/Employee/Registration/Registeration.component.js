"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var employee_service_1 = require("../employee.service");
var EmployeeRegister = (function () {
    function EmployeeRegister(_fb, _employeeService) {
        this._fb = _fb;
        this._employeeService = _employeeService;
        this.lastName = '';
        this.firstName = '';
        this.designation = '';
        this.status = 'Registration is not yet done!';
    }
    EmployeeRegister.prototype.reset = function () {
        this.firstName = this.lastName = this.designation = '';
        this.status = 'Registration is not yet done!';
    };
    EmployeeRegister.prototype.createEMployee = function () {
        var _this = this;
        var data = {};
        data.FirstName = this.firstName;
        data.LastName = this.lastName;
        data.Designation = this.designation;
        if (this.firstName.trim() != "" && this.lastName.trim() != "" && this.designation.trim() != "") {
            this._employeeService.Register(data)
                .subscribe(function (data) {
                console.log(data);
                _this.status = 'Successfully registered!';
            });
        }
    };
    return EmployeeRegister;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EmployeeRegister.prototype, "formHeading", void 0);
EmployeeRegister = __decorate([
    core_1.Component({
        selector: 'employee-register',
        templateUrl: './Registeration.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, employee_service_1.EmployeeService])
], EmployeeRegister);
exports.EmployeeRegister = EmployeeRegister;
//# sourceMappingURL=Registeration.component.js.map