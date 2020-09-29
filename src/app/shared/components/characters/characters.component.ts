import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '@comics-core/models/character';
import { IPaginator } from '@comics-core/models/paginator';
import { CharactersService } from '@comics-core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  query: string;
  characters: ICharacter[];
  paginator: IPaginator;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {
    this.paginator = {
      pageSize: 10,
      previousPage: 0,
      pageIndex: 0,
      length: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.query = params.id;
      this.getChars(this.query, this.paginator);
    });
  }

  getChars(q: string, paginator: IPaginator) {
    this.characterService.getCharactersByName(q,paginator).subscribe((chars) => {
      const [...charsResult] = chars.data.results;
      this.paginator.length = chars.data.total;
      this.characters = this.characterService.formatCharacters(charsResult);
    });
  }

  onPageChanged(event: IPaginator) {
    this.paginator = event;
    this.getChars(this.query, this.paginator);
  }
}
