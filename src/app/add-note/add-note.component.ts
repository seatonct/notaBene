import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NOTES } from '../notes';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./add-note.component.html`,
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    noteTitle: new FormControl(''),
    noteText: new FormControl('', Validators.required),
  });

  submitNote() {
    let title = this.addNoteForm.value.noteTitle ?? '';
    let text = this.addNoteForm.value.noteText ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };
      NOTES.unshift(newNote);
      this.addNoteForm.reset();

      this.router.navigateByUrl('/');
    }
  }
}
