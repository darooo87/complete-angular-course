import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from 'angularfire2/database';
import { ActionSequence } from 'protractor';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from '@firebase/util';
import { DataSnapshot } from '@firebase/database';

@Component({
  selector: 'database-courses',
  templateUrl: './database-courses.component.html',
  styleUrls: ['./database-courses.component.css']
})
export class DatabaseCoursesComponent {
  courses$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses')
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ key: action.key, val: action.payload.val() }));
      });

    this.author$ = db.object('/authors/1')
      .snapshotChanges()
      .map(action => {
        return action.payload.val()
      });
  }

  add(course: HTMLInputElement) {
    this.db.list('/courses').push(course.value);

    // this.db.list('/courses').push({
    //   name: course.value,
    //   price: 150,
    //   isLive: true,
    //   sections: [
    //     { title: 'components' },
    //     { title: 'componentz' }
    //   ]
    // });
    course.value = '';
  }

  update(course) {
    console.log(course);
    this.db.object('/courses/' + course.key).set(course.val + ' Updated');
  }

  delete(course) {
    console.log('delete');
    this.db.object('/courses/' + course.key).remove();
  }
}
