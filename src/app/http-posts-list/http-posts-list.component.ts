import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from './post.interface';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'http-posts-list',
  templateUrl: './http-posts-list.component.html',
  styleUrls: ['./http-posts-list.component.css']
})
export class HttpPostsListComponent implements OnInit {
  
  constructor(private service: PostsService) {
  }

  public posts = [];
  
  ngOnInit(): void {
    this.service.getPosts().subscribe(response => { this.posts = response.json(); });
  }

  addPost(title: HTMLInputElement) {
    let post = { title: title.value };
    title.value = '';
    this.service.addPost(post)
    .subscribe(response => { 
      this.posts.splice(0, 0, response.json()); 
    });
  }

  deletePost(post: PostInterface) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  updatePost(post : PostInterface){
    this.service.updatePost(post).subscribe(response => { });
    // use this.http.patch to update only changed fields
  }
}
