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
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CollectionsBuilderService } from './services/collections-builder.service';
import { FormBuilderService } from './services/form-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CollectionFormviewModule,
    CollectionsModule,
    DynamicTableModule,
    RouterModule,
    UserModule,
    AuthModule
  ],
  providers: [SchemaBuilderService,CollectionsBuilderService,FormBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
