import { Component, OnInit } from '@angular/core';
import { NOTES } from '../notes';
import { NotesService } from '../notes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  // standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  notes = NOTES;
  // notes: any[] = [];

  // constructor(private notesService: NotesService) {}

  // ngOnInit() {
  //   this.fetchNotes();
  // }

  // fetchNotes() {
  //   this.notesService.fetchNotes().subscribe(
  //     (response: any[]) => {
  //       this.notes = response;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching notes:', error);
  //     }
  //   );
  // }
}
