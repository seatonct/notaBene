import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'add-note', title: 'New Note', component: AddNoteComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
