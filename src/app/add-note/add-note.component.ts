import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./add-note.component.html`,
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent {}
