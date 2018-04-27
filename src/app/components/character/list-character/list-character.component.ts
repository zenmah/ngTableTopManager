import { Router } from '@angular/router';
//import { CharacterService } from '../../../firebase/character.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Character } from '../shared/character';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Observable<Character[]>;
  constructor(private characterService: CharacterService, private router: Router) {
    this.characters = this.characterService.getSnapshot();
  }
  ngOnInit() {
    this.characters.subscribe((x) => {
      console.log('characters loaded')
    });
  }

  openSheet(character: any) {
       this.router.navigate(['/characters', character.id]);
    }
}
