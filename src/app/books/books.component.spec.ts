import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BooksComponent } from './books.component';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let bookService: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [BooksComponent],
      providers: [BookService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BookService);

    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');

    const book1: Book = {
      id: 1,
      title: 'Le Seigneur des Anneaux',
      description: 'Un hobbit part en quête d\'un anneau magique',
      author: 'J.R.R. Tolkien',
      publicationDate: '29 Juillet 1954',
      imageUrl: 'https://picsum.photos/200/300',
    };
    const book2: Book = {
      id: 2,
      title: 'Harry Potter et la Pierre Philosophale',
      description: 'Un jeune sorcier part à l\'aventure pour découvrir la vérité sur sa famille',
      author: 'J.K. Rowling',
      publicationDate: '26 Juin 1997',
      imageUrl: 'https://picsum.photos/200/300',
    };
    spyOn(bookService, 'getBooks').and.returnValue(of([book1, book2]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of books', () => {
    const bookCards = fixture.nativeElement.querySelectorAll('.card');
    expect(bookCards.length).toBe(2);
  });

  it('should navigate to book detail page when clicking on a book', () => {
    const bookLinks = fixture.nativeElement.querySelectorAll('.card a');
    bookLinks[0].click(); // sélectionne le premier lien de livre
    console.log(TestBed.inject(Router).navigate);
    expect(TestBed.inject(Router).navigate).toHaveBeenCalledWith(['/books', 1]);
  });
});