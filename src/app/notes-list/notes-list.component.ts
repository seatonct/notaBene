import { Component, OnInit } from '@angular/core';
import { NOTES } from '../notes';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  notes = NOTES;
}
