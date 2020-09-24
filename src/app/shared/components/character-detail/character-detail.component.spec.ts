import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICharacter } from '@comics-core/models/character';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  const charInput: ICharacter = {
    name: 'John Wraith',
    description:
      ' A mutant with teleportation powers, Wraith served with Wolverine, Sabretooth, Maverick and Silver Fox in TeamX, a covert operations unit formed by Weapon X. ',
    thumbnail: 'image.jpg',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    component.character = charInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
