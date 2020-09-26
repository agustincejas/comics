import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from '@comics-shared/components/character-detail/character-detail.component';
import { CharactersComponent } from '@comics-shared/components/characters/characters.component';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters/:id', component: CharactersComponent},
  { path: 'characters/detail/:id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
