import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../book-list/book.model'
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookService: BookService,private router: Router) { }
  bookItem= new BookModel(null,null,null,null)
  ngOnInit(): void {
  }
  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }

}
