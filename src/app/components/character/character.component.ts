import { CharacterService } from '../../firebase/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: any;
  constructor( private charService: CharacterService) { }

  ngOnInit() {

  }

}
