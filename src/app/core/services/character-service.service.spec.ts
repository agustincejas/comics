import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CharactersService } from './characters.service';
import { environment } from 'src/environments/environment';
import { PATH_CHARACTERS_V1 } from '../constants';

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
    const params = `?nameStartsWith=${name}&limit=10`;

    charsService.getCharactersByName(name).subscribe(chars => {
      expect(chars).toEqual(charData);
    });

    const req = httpTestingController.expectOne(environment.marvelApi + PATH_CHARACTERS_V1 + params);

    req.flush(charData);
    expect(req.request.method).toEqual('GET');
  });
});
