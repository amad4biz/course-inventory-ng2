import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
	selector: 'course-edit',
	providers: [],	
	styleUrls: ['./course-edit.scss'],	
	templateUrl: './course-edit.html',

})

export class CourseEditComponent implements OnInit {

    public _course: any = {};
  
    @Input()
    set course(value) {
        this._course = value;
    }

    get course() {
        return this._course;
    }

	
	private isEditing = false;


	private infoMsg = { body: "", type: "info" };

	constructor(private http: Http,
		private formBuilder: FormBuilder) { }

	ngOnInit() {

	}

}