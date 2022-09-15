import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsBuilderService } from 'src/app/services/collections-builder.service';

@Component({
  selector: 'app-collection-lists',
  templateUrl: './collection-lists.component.html',
  styleUrls: ['./collection-lists.component.css']
})
export class CollectionListsComponent implements OnInit {
  collectionsLists:any[]=[];
  fieldsPermission:any[]=['id','type','name','listApiUrl','submitUrl','Actions'];
  constructor(private cs: CollectionsBuilderService, private router:Router) { }

  ngOnInit(): void {
    this.collectionsLists = [...this.cs.getcollectionsList()];
    //this.goTopage('/')
  }

  collectionEditf: Function = (value:any)=>{
    console.log('this is working for edit',value);
  }
  collectionDeletef: Function = (value:any)=>{
    console.log('this is working for delete',value);
  }

}
