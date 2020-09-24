import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CharacterPreviewComponent } from './components/character-preview/character-preview.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SpinnerComponent,
    CharacterPreviewComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [CharactersComponent, SpinnerComponent, CharacterPreviewComponent]
})
export class SharedModule {}
