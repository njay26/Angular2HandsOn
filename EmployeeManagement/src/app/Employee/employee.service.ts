import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    Register(imp: any): any {

        let url: string = "http://localhost:51777/employee/add?firstName="+ imp.FirstName + "&lastName=" + imp.LastName + "&designation=" + imp.Designation;
        return this._http.post(url,"")
            .map(result => result.json());
    }

    GetEmployee(): any {

        return this._http.get("http://localhost:51777/GetEmployees")
            .map(result => result.json());
    }

    HandleError(error: any): void {
        console.log(error);
    }

}