import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Http, Headers, RequestOptions, Request} from "@angular/http";


@Component({
    selector: 'sign-up',
    styleUrls: ['./client/modules/home/signup/signup.component.css'],
    templateUrl: './client/modules/home/signup/signup.component.html'
})
export class SignupComponent implements OnInit {
    signUpUrl: string = "http://localhost:3000/user-api/signup";

    model = {
        name: undefined,
        password: undefined,
        confirm_password: undefined
    };

    constructor(private http: Http) { }

    ngOnInit() { }

    onSubmit(formData){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        var results = this.http.post(this.signUpUrl, JSON.stringify(this.model), options).map(req => {
           return req.json();
        }).subscribe(err => {console.log(err)}, data => {console.log(data)});
    }

}
