import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from '../notes.service';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

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

  deleteItem(id: number): void {
    this.notesService.deleteNote(id).subscribe({
      next: () => {
        this.notes = this.notes.filter((note) => note.id !== id);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
