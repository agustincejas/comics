import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/core/models/character';

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss']
})
export class CharacterPreviewComponent implements OnInit {

  @Input() character: ICharacter;

  constructor() { }

  ngOnInit(): void {
  }

}
