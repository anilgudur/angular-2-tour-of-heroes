import { Component, OnInit }  from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[]; //heroes  = HEROES;
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    getHeroesPromise(): void {
        this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes);
    }

    getHeroesPromiseSlowly(): void {
        this.heroService.getHeroesPromiseSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        //this.getHeroes();
        //this.getHeroesPromise();
        this.getHeroesPromiseSlowly();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
