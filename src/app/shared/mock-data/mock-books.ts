import { Book } from '../model/book.model';

export const BOOKS: Book[] = [
  { id: 111, name: 'Book1', price: 50, courseId: 11, isMendetory: false },
  { id: 112, name: 'Book2', price: 60, courseId: 11, isMendetory: true },
  { id: 113, name: 'Book3', price: 70, courseId: 11, isMendetory: false },
  { id: 221, name: 'Book4', price: 60, courseId: 22, isMendetory: false },
  { id: 222, name: 'Book5', price: 40, courseId: 22, isMendetory: true },
  { id: 223, name: 'Book6', price: 50, courseId: 22, isMendetory: false },
  { id: 331, name: 'Book7', price: 60, courseId: 33, isMendetory: false },
  { id: 332, name: 'Book8', price: 70, courseId: 33, isMendetory: false },
  { id: 333, name: 'Book9', price: 80, courseId: 33, isMendetory: true },
  { id: 334, name: 'Book10', price: 90, courseId: 33, isMendetory: false }
];