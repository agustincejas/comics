import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '@comics-core/services/characters.service';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let mockCharactersService: CharactersService;

  const mockRoute = {
    params: {
      subscribe: () => {
        return {
          params: { id: 5 }
        };
      }
    }
  };

  mockCharactersService = jasmine.createSpyObj([
    'getCharacterById',
    'getComicsByCharacter',
  ]);



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent, MatPaginator ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute},
        { provide: CharactersService, useValue: mockCharactersService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getComics should call  getComicsByCharacter of charactersService', () => {
    const comicId = 103;
    component.paginator = {
      pageSize: 2,
      previousPage: 0,
      pageIndex: 0,
      length: 0
    };

    component.getComics(comicId, component.paginator);

    expect(mockCharactersService.getComicsByCharacter).toHaveBeenCalledWith(comicId, component.paginator);
  });
});
