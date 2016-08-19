import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { routing } from "./authenticated.routing";
import { SharedModule } from "../shared/shared.module";
import {AuthHomeComponent} from "./home/auth-home.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        SharedModule.forRoot(),
    ],
    declarations: [ AuthHomeComponent ],
    bootstrap:    [  AuthHomeComponent ]
})
export class AuthenticatedModule { }
