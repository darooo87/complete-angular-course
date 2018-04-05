import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HttpPostsListComponent } from './http-posts-list/http-posts-list.component';
import { PostsService } from './services/posts.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    HttpPostsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
