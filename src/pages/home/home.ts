import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemon;
  lista_pokemon=[];

  nextId:number;

  constructor(public navCtrl: NavController,public pkmnProvider:PokemonProvider) {
    this.nextId = 1;
  }

  getPokemon(){
    this.pkmnProvider.getPokemon(this.nextId)
      .subscribe(
        (res)=>{
          this.nextId++;

          this.lista_pokemon.push(res);
          console.log(res);
        }
      )
  }

}
