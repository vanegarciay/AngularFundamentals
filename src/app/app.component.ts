import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullPokemonList:any = [];

  constructor(private http:Http){
    
  }

  ngOnInit(){
    this.http.get("../assets/pokedex.json").subscribe(pokeData => {
      this.fullPokemonList = pokeData.json();
      //console.log("PokeData :"+JSON.stringify(this.fullPokemonList))
    })
  }
}
