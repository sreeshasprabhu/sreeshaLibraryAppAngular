import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel }  from '../author-list/author.model'
import { AuthorService } from '../author.service'
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private authorService: AuthorService,private router: Router) { }
  authorItem= new AuthorModel(null,null,null)
  ngOnInit(): void {
  }
  AddAuthor()
  {    
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
