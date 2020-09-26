import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THUMBNAIL_SIZE } from '@comics-core/constants';
import { ICharacter } from '@comics-core/models/character';
import { CharactersService } from '@comics-core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  query: string;
  characters: ICharacter[];

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params.id;
      this.characterService
        .getCharactersByName(this.query)
        .subscribe((chars) => {
          const [...charsResult] = chars.data.results;
          this.characters = this.characterService.formatCharacters(charsResult);
      });
    });
  }

}
