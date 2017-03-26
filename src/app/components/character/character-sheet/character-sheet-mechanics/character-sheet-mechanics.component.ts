import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-sheet-mechanics',
  templateUrl: './character-sheet-mechanics.component.html',
  styleUrls: ['./character-sheet-mechanics.component.css']
})
export class CharacterSheetMechanicsComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit() {
  }

}
