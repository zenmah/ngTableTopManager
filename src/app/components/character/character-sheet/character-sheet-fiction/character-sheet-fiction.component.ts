import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-sheet-fiction',
  templateUrl: './character-sheet-fiction.component.html',
  styleUrls: ['./character-sheet-fiction.component.css']
})
export class CharacterSheetFictionComponent implements OnInit {
  @Input() character: any;
  constructor() { }

  ngOnInit() {
  }

}
