import { Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'add-note', title: 'New Note', component: AddNoteComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
