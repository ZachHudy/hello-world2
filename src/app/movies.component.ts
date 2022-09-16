import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
    selector: 'movies',
    template: `<h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let movie of movies">
                        {{ movie }}
                    </li>
                </ul>
    `
})


export class MoviesComponent {
    title = 'I Love Movies';
    movies;

    constructor(service: MoviesService) {
        this.movies = service.getMovies();
    }

    getTitle() {
        return this.title;
    }

}