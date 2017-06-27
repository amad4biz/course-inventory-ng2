import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CourseService } from '../../course.service';
import { Book } from '../../../shared/model/book.model';
import { Course } from '../../../shared/model/course.model';


@Component({
	selector: 'course-add',
	providers: [CourseService],
	styleUrls: ['./course-add.scss'],
	templateUrl: './course-add.html',

})

export class CourseAddComponent {

	@Output()
	courseAdd: EventEmitter<any> = new EventEmitter();

	private course = {};
	private addCourseForm: FormGroup;
	private id = new FormControl("", Validators.required);
	private name = new FormControl("", Validators.required);
	private price = new FormControl("", Validators.required);

	private infoMsg = { body: "", type: "info" };

	constructor(private inventoryService: CourseService,
		private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.addCourseForm = this.formBuilder.group({
			id: this.id,
			name: this.name,
			price: this.price
		});
	}


	addCourse() {
		this.courseAdd.emit(this.addCourseForm.value)
		this.addCourseForm.reset();
		//this.sendInfoMsg("item added successfully.", "success");
	}

}