import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      description: 'The Hitchhiker\'s Guide to the Galaxy is a comic science fiction series created by Douglas Adams that has become popular among fans of the genre and members of the scientific community.',
      author: 'Douglas Adams',
      publicationDate: '12 October 1979',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg'
    },
    {
      id: 2,
      title: '1984',
      description: 'Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian social science fiction novel by English novelist George Orwell.',
      author: 'George Orwell',
      publicationDate: '8 June 1949',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTUr4i3iCtjUtG-9dvDd_Z7-Mesd3RrIwpBAzPJy0Dt1zstG_p'
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
      author: 'Harper Lee',
      publicationDate: '11 July 1960',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcajKE6V6e--gRiDI7JeNFNz_gSGYp_EVAg&usqp=CAU'
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBook(id: number): Observable<Book | undefined> {
    const book = this.books.find(book => book.id === id);
    return of(book);
  }
}