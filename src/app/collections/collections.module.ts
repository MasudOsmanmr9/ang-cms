import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColectionComponent } from './components/create-colection/create-colection.component';
import { CollectionListsComponent } from './components/collection-lists/collection-lists.component';
import { FormsSchemaBuilderComponent } from './components/forms-schema-builder/forms-schema-builder.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './pages/collections-home/collections-home.component';



@NgModule({
  declarations: [
    CreateColectionComponent,
    CollectionListsComponent,
    FormsSchemaBuilderComponent,
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  
})
export class CollectionsModule { }
