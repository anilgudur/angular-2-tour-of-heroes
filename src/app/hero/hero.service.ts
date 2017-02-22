import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    //getHeroes(): void {} // stub
    getHeroes(): Hero[] {
        return HEROES;
    }
    getHeroesPromise(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesPromiseSlowly(): Promise<Hero[]> {
        return new Promise(
            resolve => {
                // Simulate server latency with 2 second display
                setTimeout(() => resolve(this.getHeroes()), 2000);
            }
        );
    }
}