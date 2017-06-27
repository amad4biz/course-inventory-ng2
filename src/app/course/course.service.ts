import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

import { COURSES } from '../shared/mock-data/mock-courses';
import { BOOKS } from '../shared/mock-data/mock-books';

import { Course } from '../shared/model/course.model';
import { Book } from '../shared/model/book.model';

import { CourseView } from '../shared/view-model/course.view.model';
import { BookView } from '../shared/view-model/book.view.model';


@Injectable()

export class CourseService {
    private courses: Course[] = [];
    private books: Book[] = [];

    private coursesView: CourseView[] = [];
    private bookView: CourseView[] = [];

    constructor() { }

    getMockCourses(): Course[] {
        console.log(COURSES);
        return COURSES;
    }

    /*getMockCourses(): Promise<Course[]> {
        //console.log(Promise.resolve(COURSES));
        //Promise.resolve(COURSES).then(data => this.courses = data);
        return Promise.resolve(COURSES).catch(ex => console.log(ex));
    }*/

    /*setMockCourses() {
        this.getMockCourses().then(mockCourses => {
            //console.log(mockCourses);
            //this.courses = mockCourses;

            this.courses = mockCourses;
            //this.courses = mockCourses.slice(1, 5);

            console.log("courses");
            console.log(this.courses);
        });
    }*/

    getMockBooks(): Book[] {
        console.log(BOOKS);
        return BOOKS;
    }

    /*getMockBooks(): Promise<Book[]> {
        //  return Promise.resolve(BOOKS);
        //Promise.resolve(BOOKS).then(data => this.books = data);
        return Promise.resolve(BOOKS).catch(ex => console.log(ex));

    }

    setMockBooks() {
        this.getMockBooks().then(mockBooks => {
            //console.log(mockCourses);
            //this.courses = mockCourses;

            this.books = mockBooks;
            //this.books = mockBooks.slice(1, 5);

            console.log("books");
            console.log(this.books);
        });
    }*/

    getCourses() {
        //this.setMockCourses();        
        this.courses = this.getMockCourses();

        //this.setMockBooks();
        this.books = this.getMockBooks();

        for (let course of this.courses) {
            let view: any = [];
            view.id = course.id;
            view.name = course.name;
            view.price = course.price;
            view.books = this.books.filter(book => book.courseId == course.id);
            this.coursesView.push(view);
        }
        return this.coursesView;
    }


    /* getCats() {
         return this.http.get('/cats').map(res => res.json());
     }
 
     addCat(cat) {
         return this.http.post("/cat", JSON.stringify(cat), this.options);
     }
 
     editCat(cat) {
         return this.http.put("/cat/" + cat._id, JSON.stringify(cat), this.options);
     }
 
     deleteCat(cat) {
         return this.http.delete("/cat/" + cat._id, this.options);
     }*/

}
