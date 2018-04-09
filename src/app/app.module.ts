import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
import { AuthorsComponent } from './authors/authors.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { NoAccessComponent } from './no-access/no-access.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AuthorsComponent,
    ContactFormComponent,
    InputFormatDirective,
    NoAccessComponent,
    SummaryPipe,
    SignupFormComponent,
    AppComponent,
    HttpPostsListComponent,
    NavbarComponent,
    HomeComponent,
    HttpPostDetailComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
