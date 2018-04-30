//import { CharacterService } from '../../../firebase/character.service';
import { CharacterListComponent } from '../list-character/list-character.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { CharacterService } from '../shared/character.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  private characterDoc: AngularFirestoreDocument<any>;
  character: Observable<any>;
  private sub :any;

  constructor(private characterService:CharacterService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log('id',params['id'])
      this.characterDoc = this.characterService.getCharacterDoc(params['id']);
       this.character = this.characterDoc.valueChanges();
       console.log('character',this.character);
    });    


  }

}
