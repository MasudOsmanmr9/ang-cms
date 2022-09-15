import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormviewRoutingModule } from './formview-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';

import { DynamicFormDatatableComponent } from '../dynamic-table/components/dynamic-form-datatable/dynamic-form-datatable.component';
import { FormviewHomeComponent } from './pages/formview-home/formview-home.component';
import { FormDataPageComponent } from './components/form-data-page/form-data-page.component';
import { DynamicFormPageComponent } from './components/dynamic-form-page/dynamic-form-page.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormviewHomeComponent,
    FormDataPageComponent,
    DynamicFormPageComponent,
    // DynamicFormDatatableComponent
  ],
  imports: [
    CommonModule,
    FormviewRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DynamicTableModule
  ]
})
export class CollectionFormviewModule { }
