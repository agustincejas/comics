import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICharacter } from '@comics-core/models/character';

import { CharacterPreviewComponent } from './character-preview.component';

describe('CharacterPreviewComponent', () => {
  let component: CharacterPreviewComponent;
  let fixture: ComponentFixture<CharacterPreviewComponent>;
  const charInput: ICharacter = {
    name: 'John Wraith',
    description:
      ' A mutant with teleportation powers, Wraith served with Wolverine, Sabretooth, Maverick and Silver Fox in TeamX, a covert operations unit formed by Weapon X. ',
    thumbnail: 'image.jpg',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPreviewComponent ]
    })
    .compileComponents();
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
});
