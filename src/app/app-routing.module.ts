import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: 'collections/schema-builder', pathMatch: 'full'},
  { path: '', redirectTo: 'collections/collection-list', pathMatch: 'full'},
  {
    path: 'collections',
    loadChildren:()=>import('./collections/collections.module').then((m)=>m.CollectionsModule),
  },
  {
    path: 'formview', loadChildren:()=>import('./collection-formview/collection-formview.module').then((m)=> m.CollectionFormviewModule)
  },
  // {
  //   path: 'create-collection', component: FieldtypebuilderComponent
  // },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
