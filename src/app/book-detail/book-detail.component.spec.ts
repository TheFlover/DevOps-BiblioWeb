import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from '../services/book.service';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let mockActivatedRoute, mockBookService;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => '1' } }
    };
    mockBookService = jasmine.createSpyObj(['getBook']);
    mockBookService.getBook.and.returnValue(of({ id: 1, title: 'Test Book', description: 'Lorem ipsum', author: 'John Doe', publicationDate: "1 Janvier 2000", imageUrl: 'https://example.com/book.jpg' }));

    await TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: BookService, useValue: mockBookService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve book details from the service', () => {
    expect(component.book).toEqual({ id: 1, title: 'Test Book', description: 'Lorem ipsum', author: 'John Doe', publicationDate: "1 Janvier 2000", imageUrl: 'https://example.com/book.jpg' });
  });

  it('should render book details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Test Book');
    expect(compiled.querySelector('p.book-author').textContent).toContain('John Doe');
    expect(compiled.querySelector('p.book-text').textContent).toContain('Lorem ipsum');
    expect(compiled.querySelector('img').src).toContain('https://example.com/book.jpg');
  });
});