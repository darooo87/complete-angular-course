import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from '../http-posts-list/post.interface';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  private url = "https://jsonplaceholder.typicode.com/posts";

  getPosts() {
    return this.http.get(this.url);
  }

  addPost(post){
    return this.http.post(this.url, post);
  }

  deletePost(id: number){
    return this.http.delete(this.url + '/' + id);
  }

  updatePost(post : PostInterface){
    return this.http.put(this.url, post);
  }
}
