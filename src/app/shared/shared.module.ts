import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CharacterPreviewComponent } from './components/character-preview/character-preview.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SpinnerComponent,
    CharacterPreviewComponent,
    CharacterDetailComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    CharactersComponent,
    SpinnerComponent,
    CharacterPreviewComponent,
    CharacterDetailComponent
  ]
})
export class SharedModule {}
