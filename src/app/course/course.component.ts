import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CourseService } from './course.service';
import { Book } from '../shared/model/book.model';
import { Course } from '../shared/model/course.model';

import { CourseView } from '../shared/view-model/course.view.model';
import { BookView } from '../shared/view-model/book.view.model';


@Component({
	selector: 'inv-course',
	providers: [CourseService],
	styleUrls: ['./course.scss'],
	templateUrl: './course.html',

})

export class CourseComponent implements OnInit {

	private courses: CourseView[] = [];
	//private coursesView: CourseView[] = [];
	//private bookView: CourseView[] = [];

	private isLoading = true;
	private course = {};
	private isEditing = false;

	private infoMsg = { body: "", type: "info" };

	constructor(private http: Http,
		private inventoryService: CourseService,
		private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.getCourses();
	}


	getCourses() {
		this.courses = this.inventoryService.getCourses();
		//console.log(this.courses);
	}


	deleteCourse(course) {

		if (window.confirm("Are you sure you want to permanently delete this item?")) {
			try {
				this.courses = this.inventoryService.deleteCourse(course);
				this.sendInfoMsg("item deleted successfully.", "success");
			}
			catch (exp) {
				this.sendInfoMsg("ERROR.", +exp);
			}
		}
	}

	addCourse(newCourse) {
		try {
			this.courses = this.inventoryService.addCourse(newCourse);
			this.sendInfoMsg("item added successfully.", "success");
		}
		catch (exp) {
			this.sendInfoMsg("ERROR.", +exp);
		}
	}

	enableEditing(course) {
		this.isEditing = true;
		this.course = course;
	}

	cancelEdit() {
		this.isEditing = false;
	}

	editCourse() {
		try {
			this.courses = this.inventoryService.editCourse(this.course);
			this.isEditing = false;
			this.sendInfoMsg("item edited successfully.", "success");
		}
		catch (exp) {
			this.sendInfoMsg("ERROR.", +exp);
		}
	}
	
	sendInfoMsg(body, type, time = 2000) {
		this.infoMsg.body = body;
		this.infoMsg.type = type;
		window.setTimeout(() => this.infoMsg.body = "", time);
	}
}