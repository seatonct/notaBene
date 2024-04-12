import { Component, OnInit } from '@angular/core';
import { NOTES } from '../notes';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent implements OnInit {
  notes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.notes = data;
    });
  }
}
