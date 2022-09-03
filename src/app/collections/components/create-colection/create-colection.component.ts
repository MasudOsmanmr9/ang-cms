import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchemaBuilderService } from 'src/app/services/schema-builder.service';
import { FormsSchemaBuilderComponent } from '../forms-schema-builder/forms-schema-builder.component';


export interface FormSchema {
  id: string
  type: string
  name: string
  'list-api-url': string
  submitUrl:string
  schema:any
  // selectOptions?: string[]
}

@Component({
  selector: 'app-create-colection',
  templateUrl: './create-colection.component.html',
  styleUrls: ['./create-colection.component.css']
})
export class CreateColectionComponent implements OnInit {

   //@ViewChild('FormsSchemaBuilderComponent',{static:true}) FormsSchemaBuilderComponent!:FormsSchemaBuilderComponent ;
  // @ViewChild(FormsSchemaBuilderComponent) FormsSchemaBuilderComponent!:FormsSchemaBuilderComponent;
  
  constructor(private fb: FormBuilder, private ss:SchemaBuilderService,  private router :Router,
    private fsbc:FormsSchemaBuilderComponent) {
    console.log('FormsSchemaBuilderComponent',fsbc.buttonConfigSchema)
   }

  collectionFormGroupHolder! : FormGroup;
  //FormsSchemaBuilderComponents! : FormsSchemaBuilderComponent;
  schematype = 'formschema'
  date = new Date();
  formSchema! : FormGroup;
  createCollectionformschema:FormSchema = {
    'id': '',
    'type': '',
    'name':'',
    'list-api-url':'',
    'submitUrl':'',
    'schema':'',
  }
  createCollectionBuilderGroup = {
    'id': [this.date.getTime(),[Validators.required]],
    'type': [this.schematype],
    'name':['',[Validators.required]],
    'list-api-url':[`${this.schematype}/list`],
    'submitUrl':[`saveOrUpdate/:${this.schematype}`],
    'schema':this.formSchema,
  }
  ngOnInit(): void {
    this.schemaImport();
    this.buttonConfigBuilderGroupInitialize();
  }
  // ngAfterViewInit(): void {
  //   this.schemaImport();
  //   this.buttonConfigBuilderGroupInitialize();
  // }



  schemaImport(){
   this.formSchema =   this.fb.group(this.fsbc.buttonConfigBuilderGroup);
   this.createCollectionBuilderGroup['schema'] = this.formSchema;
  }

  buttonConfigBuilderGroupInitialize() {
    this.collectionFormGroupHolder = this.fb.group(this.createCollectionBuilderGroup);
    console.log('collectionFormGroupHolder',this.collectionFormGroupHolder.value);
  }

}
