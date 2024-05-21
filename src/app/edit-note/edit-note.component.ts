import { Component } from '@angular/core';
import { NotesService } from '../notes.service';

interface Note {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [],
  template: ` <p>edit-note works!</p> `,
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent {
  errorMessage!: string;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.getNoteById(id).subscribe({
      next: (note) => {
        this.note = note;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
