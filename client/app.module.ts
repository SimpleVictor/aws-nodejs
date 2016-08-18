import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { routing } from "./routes";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
