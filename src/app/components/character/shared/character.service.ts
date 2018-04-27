import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Character } from './character';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewCharacter {
  content: string;
  hearts: 0;
  time: number;
}

@Injectable()
export class CharacterService {

  charactersCollection: AngularFirestoreCollection<Character>;
  characterDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.charactersCollection = this.afs.collection('characters', (ref) => ref.orderBy('name', 'desc').limit(5));
  }

  getData(): Observable<Character[]> {
    return this.charactersCollection.valueChanges();
  }

  getSnapshot(): Observable<Character[]> {
    // ['added', 'modified', 'removed']
    return this.charactersCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Character;
        return { id: a.payload.doc.id, name: data.name, campaign: data.campaign, game_system: data.game_system, image_url:data.image_url };
      });
    });
  }

  
  getCharacterDoc(id: string) {
    return this.afs.doc<Character>(`characters/${id}`);
  }

  getCharacter(id: string) {
    return this.afs.doc<Character>(`characters/${id}`).valueChanges();
  }

  create(character: Character) {
    return this.charactersCollection.add(character);
  }

  updateCharacter(id: string, data: Partial<Character>) {
    return this.getCharacterDoc(id).update(data);
  }

  deleteCharacter(id: string) {
    return this.getCharacterDoc(id).delete();
  }
}