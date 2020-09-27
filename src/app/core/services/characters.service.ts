import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '@comics-core/models/character';
import { IComic } from '@comics-core/models/comic';
import { IPaginator } from '@comics-core/models/paginator';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1, PATH_COMICS, THUMBNAIL_SIZE_CHARACTER, THUMBNAIL_SIZE_COMIC } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: ICharacter[];
  comics: IComic[];

  constructor(private http: HttpClient) { }

  getCharactersByName(name: string): Observable<any>{
    const params = new HttpParams().set('nameStartsWith', name).set('limit', '10');

    return this.http.get(environment.marvelApi + PATH_CHARACTERS_V1, { params });
  }

  getComicsByCharacter(charId: number, paginator: IPaginator): Observable<any> {
      const offset = paginator.pageIndex * paginator.pageSize;
      const limit = paginator.pageSize;
      const params = new HttpParams()
        .set('offset', offset.toString())
        .set('limit',limit.toString())
        .set('orderBy', 'title');

      return this.http.get(`${environment.marvelApi + PATH_CHARACTERS_V1}/${charId + PATH_COMICS}`, { params });
  }

  formatComics(comics: any[]): IComic[] {
    const formattedComics = comics.map((comic: any) => {
      return {
        id: comic.id,
        name: comic.title,
        thumbnail: `${comic.thumbnail.path}/${THUMBNAIL_SIZE_COMIC}.${comic.thumbnail.extension}`,
        url: comic.urls[0].url
      };
    });
    this.comics = formattedComics;
    return formattedComics;
  }

  formatCharacters(chars: any[]): ICharacter[] {
    const formattedChars = chars.map((char: any) => {
      return {
        id: char.id,
        name: char.name,
        description: char.description,
        thumbnail: `${char.thumbnail.path}/${THUMBNAIL_SIZE_CHARACTER}.${char.thumbnail.extension}`,
      };
    });
    this.characters = formattedChars;
    return formattedChars;
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return new Observable((observer) => {
      let charResult: ICharacter;
      if (this.characters) {
        charResult = this.characters.find((char) => {
          return char.id === id;
        });
        observer.next(charResult);
      } else {
        this.http
          .get(`${environment.marvelApi + PATH_CHARACTERS_V1}/${id}`)
          .subscribe((char: any) => {
            const arr = [...char.data.results];
            charResult = this.formatCharacters(arr)[0];
            observer.next(charResult);
          });
      }
    });
  }
}
