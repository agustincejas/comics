import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IComic } from '@comics-core/models/comic';

import { ComicDetailComponent } from './comic-detail.component';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;
  const comicInput: IComic = {
    id: 3537,
    name: 'Amazing Spider-Man (1999) #529',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/5/d0/4bc3291a4b067/landscape_xlarge.jpg',
    url: 'spiderUrl'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    component.comic = comicInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
