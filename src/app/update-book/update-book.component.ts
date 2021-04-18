import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookItem= {
    title:'',
   author:'',
    genre:'',
    image:'',
    
    }
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("bookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
}
editBook()
{    
  this.bookService.editBook(this.bookItem);   
  alert("Success");
  this.router.navigate(['books']);
}
}
