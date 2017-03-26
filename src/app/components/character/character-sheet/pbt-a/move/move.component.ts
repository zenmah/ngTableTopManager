import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-sheet-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  @Input() move: any;

  constructor() { }

  ngOnInit() {
  }

}
