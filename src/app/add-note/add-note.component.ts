import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: `./add-note.component.html`,
  styleUrl: './add-note.component.css',
  providers: [NotesService],
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    noteTitle: new FormControl(''),
    noteText: new FormControl('', Validators.required),
  });

  constructor(private notesService: NotesService) {}

  submitNote() {
    let title = this.addNoteForm.value.noteTitle ?? '';
    let text = this.addNoteForm.value.noteText ?? '';

    if (this.addNoteForm.valid) {
      let newNote = {
        title: title,
        text: text,
      };

      this.notesService.addNote(newNote).subscribe();
      this.addNoteForm.reset();

      this.router.navigateByUrl('/');
    }
  }
}
