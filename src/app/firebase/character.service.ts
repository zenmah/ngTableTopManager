import { FirebaseObjectObservable } from 'angularfire2/database';
import { any } from 'codelyzer/util/function';
import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CharacterService {

  user;
  characters: FirebaseListObservable<any[]>;

  businesses: FirebaseListObservable<any[]>;
  categories: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(usr => this.user = usr);
   }

  getCharacters(){
    if (this.user.auth)
    {
      this.characters = this.af.database.list('/characters') as FirebaseListObservable<any[]>;

        }
        return this.characters;
    }

  getCharacter(key: string) {
    if (key) {
      console.log(`filtering the cahracters of the ${key}`);
      return this.af.database.object(`/characters/${key}`) as FirebaseObjectObservable<any>;
    } else {
       console.log(`key is null`);
       return null;
    }
  }



  getBusinesses(category?: string) {
    if (category) {
      console.log(`filtering the bussinesses of the ${category}`);
      this.businesses = this.af.database.list('/businesses', {
        query: {
          orderByChild: '$key',
          equalTo: category
        }
      }) as FirebaseListObservable<any[]>;
    } else {
      this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<any[]>;
    }
    return this.businesses;
  }

  getCategories() {
    this.categories = this.af.database.list('/categories') as FirebaseListObservable<any[]>;
    return this.categories;
  }

  addBusiness(business: any) {
    return (this.businesses.push(business));
  }
  deleteBusiness(businessKey: string) {
    return this.businesses.remove(businessKey);
  }

  updateBusiness(businessKey: string, updatedBusiness: any) {
    // tslint:disable-next-line:prefer-const
     const updObje = Object.assign({}, updatedBusiness);
     delete updObje.$exists;
     delete updObje.$key;
     return this.businesses.update(businessKey, updObje);
  }


}
