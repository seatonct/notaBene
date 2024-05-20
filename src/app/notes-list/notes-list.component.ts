import { Component, OnInit } from '@angular/core';
import { NOTES } from '../notes';
import { NotesService } from '../notes.service';
import { NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

interface Note {
  title: string;
  text: string;
}

@Component({
  selector: 'app-notes-list',
  imports: [NgFor, NgIf],
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent implements OnInit {
  // notes = NOTES;
  constructor(private notesService: NotesService) {}

  notes!: Observable<{ id: number; title: string; text: string }>[];

  ngOnInit(): void {
    this.notes = this.notesService.fetchNotes();
  }
}
