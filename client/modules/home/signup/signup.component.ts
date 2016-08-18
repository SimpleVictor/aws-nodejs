import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'sign-up',
    styleUrls: ['./client/modules/home/signup/signup.component.css'],
    templateUrl: './client/modules/home/signup/signup.component.html'
})
export class SignupComponent implements OnInit {
    model = {
        name: undefined,
        password: undefined,
        confirm_password: undefined
    };

    constructor() { }

    ngOnInit() { }

    onSubmit(formData){
        console.log(this.model);
        console.log(formData);
    }

}
