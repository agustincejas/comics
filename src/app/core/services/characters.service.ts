import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1 } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharactersByName(name: string): Observable<any>{
    const params = new HttpParams().set('nameStartsWith', name).set('limit', '10');

    return this.http.get(environment.marvelApi + PATH_CHARACTERS_V1, { params });
  }
}
