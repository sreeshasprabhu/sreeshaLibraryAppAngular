import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:5000/books/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:5000/books");
  }
  newBook(item){
    return this.http.post("http://localhost:5000/admin/add",{"book":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:5000/books/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:5000/books/update",book)
    .subscribe(data =>{console.log(data)})
  }
}
