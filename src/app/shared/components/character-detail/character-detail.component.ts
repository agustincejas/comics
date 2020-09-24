import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/core/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: ICharacter;

  constructor() { }

  ngOnInit(): void {
  }

}
