import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  newUser(item){
    return this.http.post("http://localhost:5000/signup",{"user":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
