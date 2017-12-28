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
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
        this.activeEmployeeRegistrationTab = 'active';
        if (location.href.includes("EmployeeList")) {
            this.activateEmployeeListTab();
        }
    }
    HomeComponent.prototype.activateEmployeeRegistrationTab = function () {
        this.activeEmployeeRegistrationTab = 'active';
        this.activeEmployeeListTab = null;
        this._router.navigate(['EmployeeRegister']);
    };
    HomeComponent.prototype.activateEmployeeListTab = function () {
        this.activeEmployeeRegistrationTab = null;
        this.activeEmployeeListTab = 'active';
        this._router.navigateByUrl('EmployeeList');
    };
    HomeComponent.prototype.alertMessage = function (value) {
        alert('sghdf');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map