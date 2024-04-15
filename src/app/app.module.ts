import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import {
  provideRouter,
  Routes,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgFor, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    AddNoteComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    NgFor,
    NgIf,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
