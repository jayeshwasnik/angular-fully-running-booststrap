import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//for routing module
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  //for routing actually
  RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'create',component:BlogCreateComponent}
  ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BlogViewComponent, BlogCreateComponent, BlogEditComponent, AboutComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
