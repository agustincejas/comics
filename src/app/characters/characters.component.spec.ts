import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../core/services/characters.service';

import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  const mockRoute = {
    params: {
      subscribe: () => {
        return {
          params: { id: 5 }
        };
      }
    }
  };

  const mockCharactersService = jasmine.createSpyObj(['getCharactersByName']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: CharactersService, useValue: mockCharactersService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
