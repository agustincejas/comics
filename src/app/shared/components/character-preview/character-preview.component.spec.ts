import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { ICharacter } from '@comics-core/models/character';

import { CharacterPreviewComponent } from './character-preview.component';

describe('CharacterPreviewComponent', () => {
  let component: CharacterPreviewComponent;
  let fixture: ComponentFixture<CharacterPreviewComponent>;
  const charInput: ICharacter = {
    id: 1009721,
    name: 'John Wraith',
    description:
      ' A mutant with teleportation powers, Wraith served with Wolverine, Sabretooth, Maverick and Silver Fox in TeamX, a covert operations unit formed by Weapon X. ',
    thumbnail: 'image.jpg'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPreviewComponent ],
      imports: [ RouterTestingModule, MatCardModule ]
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
