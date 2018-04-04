import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from './post.interface';

@Component({
  selector: 'http-posts-list',
  templateUrl: './http-posts-list.component.html',
  styleUrls: ['./http-posts-list.component.css']
})
export class HttpPostsListComponent {
  posts = [];
  private url = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    });
  }

  addPost(title: HTMLInputElement) {
    let post = { title: title.value };
    title.value = '';
    this.http.post(this.url, post).subscribe(response => {
      this.posts.splice(0, 0, post);
    });
  }

  deletePost(post: PostInterface) {
    this.http.delete(this.url + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  updatePost(post : PostInterface){
    this.http.put(this.url, post).subscribe(response => {
      
    });
  }
}
