import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionFormviewModule } from './collection-formview/collection-formview.module';
import { CollectionsModule } from './collections/collections.module';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
import {SchemaBuilderService } from './services/schema-builder.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CollectionFormviewModule,
    CollectionsModule,
    DynamicTableModule,
    RouterModule
  ],
  providers: [SchemaBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
