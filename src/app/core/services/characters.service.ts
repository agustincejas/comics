import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '@comics-core/models/character';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1, PATH_COMICS, THUMBNAIL_SIZE } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: ICharacter[];

  constructor(private http: HttpClient) { }

  getCharactersByName(name: string): Observable<any>{
    const params = new HttpParams().set('nameStartsWith', name).set('limit', '10');

    return this.http.get(environment.marvelApi + PATH_CHARACTERS_V1, { params });
  }

  getComicsByCharacter(charId: number): Observable<any> {
    return this.http.get(`${environment.marvelApi + PATH_CHARACTERS_V1}/${charId + PATH_COMICS}`);
  }

  formatCharacters(chars: []): ICharacter[] {
    const formattedChars = chars.map((char: any) => {
      return {
        id: char.id,
        name: char.name,
        description: char.description,
        thumbnail: `${char.thumbnail.path}/${THUMBNAIL_SIZE}.${char.thumbnail.extension}`,
      };
    });
    this.characters = formattedChars;
    return formattedChars;
  }

  getCharacterById(id: number) {
    return this.characters.find( char => {
      return char.id === id;
    });
  }
}
