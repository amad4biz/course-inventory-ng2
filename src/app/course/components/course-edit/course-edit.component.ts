import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'course-edit',
	providers: [],
	styleUrls: ['./course-edit.scss'],
	templateUrl: './course-edit.html',

})

export class CourseEditComponent implements OnInit {

	@Output()
	courseEditEvent: EventEmitter<any> = new EventEmitter();

	@Output()
	courseEditCancelEvent: EventEmitter<any> = new EventEmitter();

	public _course: any = {};

	@Input()
	set course(value) {
		this._course = value;
	}

	get course() {
		return this._course;
	}

	private infoMsg = { body: "", type: "info" };

	constructor() { }

	ngOnInit() {

	}

	cancelEditing() {
		this.courseEditCancelEvent.emit();

	}

	editCourse() {
		this.courseEditEvent.emit();
	}
}