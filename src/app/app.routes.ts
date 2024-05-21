import { Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

export const routes: Routes = [
  { path: '', title: 'NotaBene!', component: NotesListComponent },
  { path: 'add-note', title: 'New Note', component: AddNoteComponent },
  { path: 'edit-note/:id', component: EditNoteComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
