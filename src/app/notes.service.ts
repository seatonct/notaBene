import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Note {
  id: number;
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
    // this.http.get('http://localhost:8088/notes').subscribe((data) => {
    //   return data;
    // });
  }
}
