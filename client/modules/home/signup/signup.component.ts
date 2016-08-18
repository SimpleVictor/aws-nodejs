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
    passwordMatch: boolean = false;
    loadingData:boolean = false;

    model = {
        name: undefined,
        password: undefined,
        confirm_password: undefined
    };

    constructor(private http: Http) { }

    ngOnInit() { }

    onSubmit(formData){
        this.loadingData = true;
        if(this.model.password === this.model.confirm_password){
            let headers = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({headers: headers});
            var results = this.http.post(this.signUpUrl, JSON.stringify(this.model), options).map(res => {
                res.json();
            }).subscribe(err => {console.log(err)}, data => {
                window.location.href='http://localhost:3000/#/home';
                return this.loadingData = false;
            });
        }else{
            this.passwordMatch = true;
            this.loadingData = false;
            console.log("Please match the password please");
        };
    }

}
