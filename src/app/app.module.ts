import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
