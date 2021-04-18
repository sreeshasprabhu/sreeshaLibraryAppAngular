import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from './book.model';
import {AuthService } from '../auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:BookModel[];
  constructor(private bookService:BookService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
   
  }
  editBook(book:any)
  {
    localStorage.setItem("bookId", book._id.toString());
    this.router.navigate(['updatebook']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books= this.books.filter(p => p !== book);
      })
  

   }

}
