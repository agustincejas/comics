import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SpinnerComponent,
    CharacterDetailComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [CharactersComponent, SpinnerComponent, CharacterDetailComponent]
})
export class SharedModule {}
