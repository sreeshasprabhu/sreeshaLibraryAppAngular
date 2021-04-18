import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'books',component:BookListComponent},
{path:'authors',component:AuthorListComponent},
{path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},
{path:'addauthor',component:AddauthorComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'updatebook',component:UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
