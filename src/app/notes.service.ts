import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  // private notesUrl = 'http://localhost:8088/notes';

  fetchNotes() /*: Observable<any[]>*/ {
    // return this.http.get<any[]>(this.notesUrl);
    return this.http.get<{ id: number; title: string; text: string }[]>(
      'http://localhost:8088/notes'
    );
  }
}
