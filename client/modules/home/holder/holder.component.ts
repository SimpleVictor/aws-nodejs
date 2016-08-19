import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Component({
    selector: 'my-login',
    templateUrl: './client/modules/home/holder/holder.component.html'
})
export class LoginComponent implements OnInit {

    loginUrl:string = "http://localhost:3000/login";
    loadingData:boolean = false;
    credentials:boolean = false;

    loginUser = {
        username: undefined,
        password: undefined
    }

    constructor(private http: Http) { }

    ngOnInit() { }

    onSubmit(){
        this.loadingData = true;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let results = this.http.post(this.loginUrl, JSON.stringify(this.loginUser), options)
            .map((res: Response) => res.json())
                .subscribe((
                    (err) => {
                        this.loadingData = false;
                        console.log("Error!!!!! " + err);
                        return;
                    },
                    (data) => {
                        this.loadingData = false;
                        console.log(data);
                        if(data === "Password is incorrect"){
                            this.credentials = true;
                        }else{
                            console.log("Login success!");
                            this.credentials = false;
                            window.location.href='http://localhost:3000/#/users';
                        };
                        return;
                    }
                ));

    }

}
