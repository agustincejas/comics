import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1 } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get(environment.marvelApi + PATH_CHARACTERS_V1);
  }
}
