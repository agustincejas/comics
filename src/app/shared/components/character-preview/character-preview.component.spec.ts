import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ICharacter } from '@comics-core/models/character';
import { CharactersService } from '@comics-core/services/characters.service';
import { CharacterPreviewComponent } from './character-preview.component';


describe('CharacterPreviewComponent', () => {
  let component: CharacterPreviewComponent;
  let fixture: ComponentFixture<CharacterPreviewComponent>;

  const charInput: ICharacter = {
    id: 1009721,
    name: 'John Wraith',
    description:
      ' A mutant with teleportation powers, Wraith served with Wolverine, Sabretooth, Maverick and Silver Fox in TeamX, a covert operations unit formed by Weapon X. ',
    thumbnail: {
      path: 'image',
      extension: '.jpg'
    }
  };

  const mockChactersService = jasmine.createSpyObj(['getThumbnailURL']);
  const mockRouter = jasmine.createSpyObj(['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPreviewComponent, MatPaginator],
      imports: [MatCardModule],
      providers: [
        { provide: CharactersService, useValue: mockChactersService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPreviewComponent);
    component = fixture.componentInstance;
    component.character = charInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#goToDetailView should redirect to character view with its id', () => {
    component.character.id = 13;

    component.goToDetailView();

    expect(mockRouter.navigate).toHaveBeenCalledWith(
      ['characters/detail',
      component.character.id]
    );
  });
});
