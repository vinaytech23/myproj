import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  myUrl = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private myService: HttpClient) { }

  getData(){
    return this.myService.get(this.myUrl);
  }
}
