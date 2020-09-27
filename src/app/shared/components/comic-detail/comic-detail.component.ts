import { Component, Input, OnInit } from '@angular/core';
import { IComic } from '@comics-core/models/comic';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  @Input() comic: IComic;

  constructor() { }

  ngOnInit(): void {
    const algo = this.comic;
  }

}
