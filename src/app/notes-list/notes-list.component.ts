import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Note {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-notes-list',
  imports: [NgFor, NgIf, RouterModule],
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
