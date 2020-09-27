import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '@comics-core/models/character';
import { IComic } from '@comics-core/models/comic';
import { CharactersService } from '@comics-core/services/characters.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  comics: IComic[];
  character: ICharacter;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      combineLatest(
      [
        // tslint:disable-next-line: radix
        this.charactersService.getCharacterById(parseInt(params.id)),
        this.charactersService.getComicsByCharacter(params.id)
      ]).subscribe((results) => {
        this.character = results[0];
        this.comics = this.charactersService.formatComics(results[1].data.results);
      });
    });
  }

}
