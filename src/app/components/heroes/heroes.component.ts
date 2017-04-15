import { Component, OnInit } from '@angular/core';
import { HeroesService,  Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService,
              private _router:Router
              ) {
    // console.log("constructor HeroesComponent");
  }

  ngOnInit() {
    // console.log("onInit HeroesComponent");
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  selectHeroe(idx:number){
    this._router.navigate( ['/heroe',idx] );
  }

}
