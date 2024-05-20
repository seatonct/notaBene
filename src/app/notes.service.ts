import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpClient: HttpClient) {}

  // private notesUrl = 'http://localhost:8088/notes';

  fetchNotes() /*: Observable<any[]>*/ {
    // return this.http.get<any[]>(this.notesUrl);
    this.httpClient.get('http://localhost:8088/notes').subscribe((data) => {
      return data;
    });
  }
}
