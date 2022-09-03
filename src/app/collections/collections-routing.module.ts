import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateColectionComponent } from './components/create-colection/create-colection.component';
import { FormsSchemaBuilderComponent } from './components/forms-schema-builder/forms-schema-builder.component';
import { CollectionsHomeComponent } from './pages/collections-home/collections-home.component';

const routes: Routes = [
  {
    path:'', component: CollectionsHomeComponent,
    
    children: [
      {path:'schema-builder',component:FormsSchemaBuilderComponent},
      {path:'collection-create',component:CreateColectionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
