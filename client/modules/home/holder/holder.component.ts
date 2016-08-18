import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Component({
    selector: 'my-login',
    templateUrl: './client/modules/home/holder/holder.component.html'
})
export class LoginComponent implements OnInit {

    loginUrl:string = "http://localhost:3000/login";

    loginUser = {
        username: undefined,
        password: undefined
    }

    constructor(private http: Http) { }

    ngOnInit() { }

    onSubmit(){
        console.log(this.loginUser);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        var results = this.http.post(this.loginUrl, this.loginUser, options)
            .map((res: Response) => res.json())
                .subscribe(((err) => console.log("Error!!!!!"), (data) => {
                    console.log("SUCCess!");
                    return;
                }));

    }

}
