import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service'

@Component({
  selector: 'app-authors',
  styleUrls: ['./authors.component.css'],
  template:
  `
  {{course.title | summary:10}}<br/>  
  `
}) 
export class AuthorsComponent {

  course = {
    title: "The complete angular course The complete angular course The complete angular course The complete angular course The complete angular course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }


}
