import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {

  heroesSearch:any[] = [];

  constructor( private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
              ) {
    this._activatedRoute.params.subscribe( params => {
      this.heroesSearch = _heroesService.searchHeroe( params[ 'text' ] );
    });
  }

  ngOnInit() {
  }

}
