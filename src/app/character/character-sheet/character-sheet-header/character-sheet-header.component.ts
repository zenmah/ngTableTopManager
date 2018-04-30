import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-character-sheet-header',
  templateUrl: './character-sheet-header.component.html',
  styleUrls: ['./character-sheet-header.component.css']
})
export class CharacterSheetHeaderComponent implements OnInit {

  @Input() character: any;
  constructor() { }

  ngOnInit() {
  }

}
