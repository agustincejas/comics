import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  providers: [],
})
export class MaterialModule {}
