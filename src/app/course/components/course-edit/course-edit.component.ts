import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'course-edit',
	providers: [],
	styleUrls: ['./course-edit.scss'],
	templateUrl: './course-edit.html',

})

export class CourseEditComponent implements OnInit {


	@Output()
	courseEditCancel: EventEmitter<any> = new EventEmitter();
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
	) { }

	ngOnInit() {

	}

	cancelEditing() {
		//this.addCourseForm.reset();
		this.courseEditCancel.emit();
	}

}