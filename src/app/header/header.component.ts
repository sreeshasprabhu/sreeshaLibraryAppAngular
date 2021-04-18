import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private bookService:BookService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}

}
