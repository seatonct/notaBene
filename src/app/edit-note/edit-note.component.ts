import { Component, inject, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Note {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: `./edit-note.component.html`,
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);
  id = Number(this.activateRoute.snapshot.paramMap.get('id'));
  errorMessage!: string;

  cancelRouter = inject(Router);

  editNoteForm = new FormGroup({
    noteTitle: new FormControl(''),
    noteText: new FormControl('', Validators.required),
  });

  constructor(private notesService: NotesService, private router: Router) {}

  // note = this.notesService.getNoteById(this.id).subscribe();
  ngOnInit(): void {
    this.notesService.getNoteById(this.id).subscribe({
      next: (note) => {
        this.editNoteForm.setValue({
          noteTitle: note.title,
          noteText: note.text,
        });
      },
    });
  }

  submitNote() {
    let title = this.editNoteForm.value.noteTitle ?? '';
    let text = this.editNoteForm.value.noteText ?? '';

    if (this.editNoteForm.valid) {
      let updatedNote = {
        title: title,
        text: text,
        id: this.id,
      };

      this.notesService.updateNote(updatedNote).subscribe();
      // this.addNoteForm.reset();

      this.router.navigateByUrl('/');
    }
  }
}
