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
  deleteId: number = 0;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.fetchNotes().subscribe({
      next: (notes) => {
        console.log('Fetched notes:', notes);
        notes.reverse();
        this.notes = notes;
        console.log('Reversed notes:', this.notes);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  isModalOpen = false;

  openModal(id: number) {
    this.deleteId = id;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
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

  confirmDelete(id: number): void {
    this.deleteItem(id);
    this.closeModal();
  }
}
