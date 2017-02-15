import { CharacterService } from '../../../firebase/character.service';
import { CharacterListComponent } from '../list-character/list-character.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  character: any;
  constructor( private route: ActivatedRoute,
  private router: Router, private charService: CharacterService) { }

  ngOnInit() {
     this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.charService.getCharacter(params['id']))
    .subscribe((character: any) => this.character = character);
  }

}
