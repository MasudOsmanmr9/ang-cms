import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionsBuilderService } from 'src/app/services/collections-builder.service';


export interface FormSchema {
  id: string
  type: string
  name: string
  collectionlist:any
  // selectOptions?: string[]
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  errorShowOnSubmit: boolean = false;
  date = new Date();

  userFormGroupHolder!: FormGroup;
  createUserformschema: FormSchema = {
    'id': '',
    'type':'',
    'name': '',
    'collectionlist':''

  }
  createUserBuilderGroup = {
    'id': [this.date.getTime(), [Validators.required]],
    'type': [],
    'name': ['', [Validators.required]],
    'collectionlist':[]
  }
  selectTableFieldOpt:string[] = [];
  collectionsLists:any[]=[];
  constructor(private fb: FormBuilder,private cs: CollectionsBuilderService) { }

  ngOnInit(): void {
    this.collectionsLists = [...this.cs.getcollectionsList()];
    this.userFormBuilderGroupInitialize();
  }

  createUser(){
    
  }

  userFormBuilderGroupInitialize() {
    this.userFormGroupHolder = this.fb.group(this.createUserBuilderGroup);
    console.log('collectionFormGroupHolder', this.userFormGroupHolder.value);
  }
}
