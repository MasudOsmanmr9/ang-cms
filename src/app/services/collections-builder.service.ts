import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CollectionsBuilderService {
  collectionsSchemaJson:any[] = [];
  currentCollection:any;
  public collectionChangeEvent:EventEmitter<any> =new EventEmitter<any>();
  constructor(private router: Router) {
    this.collectionsSchemaJson = JSON.parse(localStorage.getItem('collectionsList')!)?? [];
   }
  
  addTocollectionsList(collection:any){
    console.log('collectionsssss',collection)
    if(!collection){
      return;
    }
    this.collectionsSchemaJson.push(collection);
    console.log('collectionsschema jsonsssssssss',this.collectionsSchemaJson);
    localStorage.setItem("collectionsList", JSON.stringify(this.collectionsSchemaJson));
  }

  clearcollectionsList(){
    this.collectionsSchemaJson = [];
    localStorage.removeItem('collectionsList')
  }
  getcollectionsList():any{
    return this.collectionsSchemaJson;
  }

  
  setSelectedCollectionList(schemaId:number){
    let scollection:any;
    this.collectionsSchemaJson.forEach((collection)=>{
      if(collection.id == schemaId){
        this.currentCollection = collection;
        this.collectionChangeEvent.emit(collection);
      }
    })
    console.log('access')
    this.router.navigateByUrl('/formview/formgenerate');
   // return scollection;
  }
  getSelectedCollection():any{
    return this.currentCollection;
  }
}
