import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }         from './app.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { HeroesComponent }      from './hero/heroes.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import { HeroService }          from './hero/hero.service';

@NgModule({
    imports:  [ BrowserModule, 
                FormsModule, 
                RouterModule.forRoot([
                    {
                        path: 'heroes',
                        component: HeroesComponent
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: '',
                        component: DashboardComponent,
                        pathMatch: 'full'
                    },
                    {
                        path: 'detail/:id',
                        component: HeroDetailComponent
                    }
                ])
    ],
    declarations: [ AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent ],
    providers:    [ HeroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
