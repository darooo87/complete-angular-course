import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { PostInterface } from '../http-posts-list/post.interface';

@Component({
  selector: 'app-http-post-detail',
  templateUrl: './http-post-detail.component.html',
  styleUrls: ['./http-post-detail.component.css']
})
export class HttpPostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostsService) { }

  post;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      console.log(id);
      this.service.get(id).subscribe(post => {
        this.post = post
        var tst = this.post;
      });

    })
  }
}
