import { BookView } from '../view-model/book.view.model';

export class CourseView {
  id: number;
  name: string;
  price: number;
  mendetoryBookId: string;
  mendetoryBookName: string;
  books: BookView[] = [];
}