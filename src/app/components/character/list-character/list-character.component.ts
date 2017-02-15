import { Router } from '@angular/router';
import { CharacterService } from '../../../firebase/character.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters;

  constructor( private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(chars => this.characters = chars);
  }

  openSheet(character: any) {
      console.log('opening character:', character);
       this.router.navigate(['/character', character.$key]);
    }
}
