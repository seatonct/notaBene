import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

interface Note {
  id: number;
  title: string;
  text: string;
}

interface NewNote {
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  apiUrl = 'http://localhost:8088/notes';

  constructor(private http: HttpClient) {}

  fetchNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  addNote(newNote: NewNote): Observable<NewNote> {
    return this.http.post<NewNote>(this.apiUrl, newNote);
  }

  deleteNote(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note);
  }
}
