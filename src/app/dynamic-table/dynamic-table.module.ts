import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormDatatableComponent } from './components/dynamic-form-datatable/dynamic-form-datatable.component';
import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    DynamicFormDatatableComponent
  ],
  imports: [
    CommonModule,
    DynamicTableRoutingModule,
    NgxDatatableModule

  ],
  exports:[DynamicFormDatatableComponent],
})
export class DynamicTableModule { }
