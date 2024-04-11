import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { NotesListComponent } from './app/notes-list/notes-list.component';

const routes: Routes = [
  { path: 'my-notes', component: NotesListComponent },
  { path: 'add-note', component: AddNoteComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
