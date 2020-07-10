
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmartDataMaterialModule } from './material/material.module';
import { RouterModule } from "@angular/router";
import { ListTableComponent } from './components/list-table/list-table.component';


/**
 * @desc Imports All Components, Providers and Modules that will be shared across applications
 */

const exportModules = [SmartDataMaterialModule, RouterModule, ReactiveFormsModule, FormsModule];
const components = [ListTableComponent];
const imports = [SmartDataMaterialModule,  ReactiveFormsModule, FormsModule]

@NgModule({
    imports: [
        ...imports
    ],
    exports: [
        ...exportModules, ...imports, ...components
    ],
    providers: [],
    declarations: [...components,],
    entryComponents: []
})
export class UtilityModule {
}
