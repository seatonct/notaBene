import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { provideRouter, Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'add-note', title: 'New Note', component: AddNoteComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];

@NgModule({
  declarations: [NotesListComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
