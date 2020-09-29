import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CharactersService } from './characters.service';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1, PATH_COMICS } from '../constants';
import { IPaginator } from '@comics-core/models/paginator';

describe('CharactersService', () => {
  let charsService: CharactersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    charsService = TestBed.inject(CharactersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(charsService).toBeTruthy();
  });

  it('#getCharacters should return an Observable', () => {
    const charData = {
      name: 'Tony Stark'
    };
    const name = 'tony';
    const paginator: IPaginator = {
      length: 5,
      pageSize: 3,
      pageIndex: 1,
      previousPage: 0
    };
    const params = `?offset=${paginator.pageIndex * paginator.pageSize}&limit=${paginator.pageSize}&nameStartsWith=${name}`;

    charsService.getCharactersByName(name, paginator).subscribe(chars => {
      expect(chars).toEqual(charData);
    });

    const req = httpTestingController.expectOne(environment.marvelApi + PATH_CHARACTERS_V1 + params);

    req.flush(charData);
    expect(req.request.method).toEqual('GET');
  });

  it('#getComicsByCharacter should return an Observable', () => {
    const comicData = {
      name: 'Iron Man',
    };
    const charId = 11000;
    const paginator: IPaginator = {
      length: 5,
      pageSize: 3,
      pageIndex: 1,
      previousPage: 0,
    };
    const params = `?offset=${paginator.pageIndex * paginator.pageSize}&limit=${
      paginator.pageSize
    }&orderBy=title`;

    charsService.getComicsByCharacter(charId, paginator).subscribe((comic) => {
      expect(comic).toEqual(comicData);
    });

    const req = httpTestingController.expectOne(
      `${environment.marvelApi + PATH_CHARACTERS_V1}/${charId + PATH_COMICS}` + params
    );

    req.flush(comicData);
    expect(req.request.method).toEqual('GET');
  });
});
