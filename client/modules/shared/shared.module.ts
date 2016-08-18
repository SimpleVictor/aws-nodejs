import { NgModule,
    ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import {FormsModule} from "@angular/forms";
// import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ CommonModule , FormsModule],
    declarations: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
    exports:      [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
