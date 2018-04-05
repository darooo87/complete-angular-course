import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from '../http-posts-list/post.interface';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  private url = "https://jsonplaceholder.typicode.com/posts";

  getPosts() {
    return this.http
    .get(this.url)
    .catch(this.handleError);
  }

  addPost(post) {
    return this.http
    .post(this.url, post)
    .catch(this.handleError);
  }

  deletePost(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  updatePost(post: PostInterface) {
    return this.http
    .put(this.url, post)
    .catch(this.handleError);
  }

  handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());
      
    return Observable.throw(new AppError(error));
  }
}
