import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  getAuthors(){
    return this.http.get("http://localhost:5000/authors");
  }
  newAuthor(item){
    return this.http.post("http://localhost:5000/addauthor/add",{"author":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
