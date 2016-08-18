import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./holder/holder.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        SharedModule.forRoot(),
    ],
    declarations: [ LoginComponent, SignupComponent ],
    bootstrap:    [ LoginComponent ]
})
export class HomeModule { }
