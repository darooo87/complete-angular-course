import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostInterface } from './post.interface';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

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
    this.service.getAll().subscribe(
      response => {
        this.posts = response.json();
      });
  }

  addPost(title: HTMLInputElement) {
    let post = { title: title.value };
    title.value = '';
    this.service.add(post)
      .subscribe(
      response => {
        this.posts.splice(0, 0, response.json());
      },
      (error: AppError) => {
        if (error instanceof BadRequestError) {
          alert('Bad request');
        } else throw error;
      });
  }

  deletePost(post: PostInterface) {
    this.service.delete(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post is already deleted.');
        } else throw error;
      });
  }

  updatePost(post: PostInterface) {
    this.service.update(post).subscribe(response => { });
  }
}
