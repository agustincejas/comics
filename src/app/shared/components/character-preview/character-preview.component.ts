import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IThumbnailSize } from '@comics-core/models/thumbnail-size';
import { CharactersService } from '@comics-core/services/characters.service';
import { ICharacter } from 'src/app/core/models/character';

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss'],
})
export class CharacterPreviewComponent implements OnInit {
  @Input() character: ICharacter;
  thumbnailSize: IThumbnailSize;
  thumbnailURL: string;

  constructor(private router: Router, private charsService: CharactersService) {
    this.thumbnailSize = {
      type: 'landscape',
      size: 'incredible',
    };
  }

  ngOnInit(): void {
    this.thumbnailURL = this.charsService.getThumbnailURL(
      this.thumbnailSize,
      this.character.thumbnail
    );
  }

  goToDetailView() {
    this.router.navigate(['characters/detail', this.character.id]);
  }
}
