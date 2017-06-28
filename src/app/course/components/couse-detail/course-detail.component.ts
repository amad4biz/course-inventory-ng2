import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    selector: 'course-detals',
    providers: [],
    styleUrls: [],
    templateUrl: '',

})

export class CourseDetailComponent {
    public courses: any[] = [
        {
            id: 1, name: 'MCSE', price: 100,
            books: [{ id: 11, name: "book1", price: 50 },
            { id: 12, name: "book2", price: 60 },
            { id: 13, name: "book3", price: 70 }]
        },
        {
            id: 2, name: 'C#', price: 200,
            books: [{ id: 21, name: "book4", price: 100 },
            { id: 22, name: "book5", price: 100 }],
        },
        {
            id: 3, name: 'MCSD', price: 300,
            books: [{ id: 31, name: "book6", price: 100 },
            { id: 31, name: "book7", price: 100 },
            { id: 33, name: "book8", price: 100 }]
        }
    ];
}