import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { PostInterface } from '../http-posts-list/post.interface';
import 'rxjs/add/observable/combineLatest';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http-post-detail',
  templateUrl: './http-post-detail.component.html',
  styleUrls: ['./http-post-detail.component.css']
})
export class HttpPostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostsService) { }

  post;

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap

    ]).subscribe(combined => {
      let paramMap = combined[0];
      let queryMap = combined[1];

      let id = +paramMap.get('id');
      this.service.get(id).subscribe(post => {
        this.post = post
      });
    });
  }
}
