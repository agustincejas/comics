import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '@comics-core/models/character';
import { IComic } from '@comics-core/models/comic';
import { CharactersService } from '@comics-core/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  comic: IComic;
  character: ICharacter;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: radix
      this.character = this.charactersService.getCharacterById(parseInt(params.id));
      this.charactersService.getComicsByCharacter(params.id)
        .subscribe(
          comic => this.comic = comic
        );
      });
  }

}
