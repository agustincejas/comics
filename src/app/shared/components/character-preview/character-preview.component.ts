import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from 'src/app/core/models/character';

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss']
})
export class CharacterPreviewComponent implements OnInit {

  @Input() character: ICharacter;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailView() {
    this.router.navigate(['characters/detail', this.character.id]);
  }

}
