import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HttpPostsListComponent } from './http-posts-list/http-posts-list.component';
import { PostsService } from './services/posts.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpPostDetailComponent } from './http-post-detail/http-post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpPostsListComponent,
    NavbarComponent,
    HomeComponent,
    HttpPostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '',  component: HomeComponent},
      { path : 'posts', component: HttpPostsListComponent},
      { path : 'post/:id', component: HttpPostDetailComponent}
    ]),
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
