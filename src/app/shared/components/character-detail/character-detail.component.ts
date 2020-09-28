import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '@comics-core/models/character';
import { IComic } from '@comics-core/models/comic';
import { IPaginator } from '@comics-core/models/paginator';
import { CharactersService } from '@comics-core/services/characters.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  comics: IComic[];
  character: ICharacter;
  comicsLength: number;
  comicId: number;
  paginator: IPaginator;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) {
    this.paginator = {
      pageSize: 20,
      previousPage: 0,
      pageIndex: 0,
      length: 0
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comicId = parseInt(params.id, 10);
      combineLatest(
      [
        this.charactersService.getCharacterById(this.comicId),
        this.getComics(this.comicId, this.paginator)
      ]).subscribe((results) => {
        this.character = results[0];
        this.comics = this.charactersService.formatComics(results[1].data.results);
        this.paginator.length = results[1].data.total;
      });
    });
  }

  getComics(comicID: number, paginator: IPaginator): Observable<any> {
    return this.charactersService.getComicsByCharacter(comicID, paginator);
  }

  onPageChanged(event: IPaginator) {
    this.paginator = event;
    this.getComics(this.comicId, this.paginator).subscribe( comics => {
      this.comics = this.charactersService.formatComics(comics.data.results);
    });
  }

}
