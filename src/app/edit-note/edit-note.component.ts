import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

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
  activateRoute = inject(ActivatedRoute);
  id = Number(this.activateRoute.snapshot.paramMap.get('id'));
  errorMessage!: string;

  constructor(private notesService: NotesService) {}
  note = this.notesService.getNoteById(this.id).subscribe();

  // ngOnInit() {
  //   this.notesService.getNoteById(id).subscribe({
  //     next: (note) => {
  //       this.note = note;
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //     },
  //   });
  // }
}
