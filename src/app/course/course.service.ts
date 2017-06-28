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
        return COURSES;
    }

    /*getMockCourses(): Promise<Course[]> {
        //console.log(Promise.resolve(COURSES));
        //Promise.resolve(COURSES).then(data => this.courses = data);
        return Promise.resolve(COURSES).catch(ex => console.log(ex));
    }*/

    /*setMockCourses() {
        this.getMockCourses().then(mockCourses => {
            this.courses = mockCourses;
            //this.courses = mockCourses.slice(1, 5);

        });
    }*/

    getMockBooks(): Book[] {
        return BOOKS;
    }

    /*getMockBooks(): Promise<Book[]> {
        //  return Promise.resolve(BOOKS);
        //Promise.resolve(BOOKS).then(data => this.books = data);
        return Promise.resolve(BOOKS).catch(ex => console.log(ex));

    }

    setMockBooks() {
        this.getMockBooks().then(mockBooks => {
            this.books = mockBooks;
            //this.books = mockBooks.slice(1, 5);
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


    addCourse(newCourse) {
        this.coursesView.push(newCourse);
        return this.coursesView;
    }

    deleteCourse(course) {
        var pos = this.coursesView.map(course => { return course.id }).indexOf(course.id);
        this.coursesView.splice(pos, 1);
        return this.coursesView;
    }

    editCourse(course) {
        let foundIndex = this.coursesView.findIndex(x => x.id == course.id);
        this.coursesView[foundIndex] = course;
        return this.coursesView;
    }
}
