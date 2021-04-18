import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service'
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors:AuthorModel[];
  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

}
