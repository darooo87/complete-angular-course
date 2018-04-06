import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { PostInterface } from '../http-posts-list/post.interface';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http-post-detail',
  templateUrl: './http-post-detail.component.html',
  styleUrls: ['./http-post-detail.component.css']
})
export class HttpPostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostsService, private router : Router) { }

  post;

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let paramMap = combined[0];
      let queryMap = combined[1];

      let id = +paramMap.get('id');
      return this.service.get(id);
    })
    .subscribe(post => {
      this.post = post;
    });
  }

  submit(){
    this.router.navigate(['/posts'])
  }
}
