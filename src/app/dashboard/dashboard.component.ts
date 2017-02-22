import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    getHeroesPromise(): void {
        this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
        this.getHeroesPromise();
    }
}