import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from '../http-posts-list/post.interface';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http
            .get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    add(post) {
        return this.http
            .post(this.url, post)
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id: number) {
        return this.http
            .delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(post: PostInterface) {
        return this.http
            .put(this.url, post)
            .map(response => response.json())
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
