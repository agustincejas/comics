import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  query: string;
  characters;

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params.id;
      this.characterService
        .getCharactersByName(this.query)
        .subscribe((chars) => {
          [...[this.characters]] = chars.data.results;
        });
    });
  }

}
