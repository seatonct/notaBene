import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotesService } from '../notes.service';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

interface Note {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-notes-list',
  imports: [NgFor, NgIf, HttpClientModule, CommonModule],
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  // notes = NOTES;
  title = 'ng-client';
  notes: Note[] = [];
  errorMessage!: string;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.fetchNotes().subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
