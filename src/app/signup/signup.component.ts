import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from './signup.model';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService: UserserviceService,private router: Router) { }
  userItem= new SignUpModel(null,null,null,null,null);
   
  ngOnInit(): void {
  }
  AddUser()
  {    
    this.UserService.newUser(this.userItem);
    console.log("Called");    
    alert("Successfully Registerd");
    this.router.navigate(['/login']);
  }
}
