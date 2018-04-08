import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpPostsListComponent } from './http-posts-list/http-posts-list.component';
import { PostsService } from './services/posts.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpPostDetailComponent } from './http-post-detail/http-post-detail.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';


@NgModule({
  declarations: [
    AppComponent,
    HttpPostsListComponent,
    NavbarComponent,
    HomeComponent,
    HttpPostDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'posts', component: HttpPostsListComponent },
      { path: 'post/:id', component: HttpPostDetailComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
