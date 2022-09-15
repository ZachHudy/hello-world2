import { Component } from '@angular/core';

@Component({
    selector: 'movies',
    template: `<h2>{{ title }}</h2>
                <ul>
                    <li *ngFor="let movie of movies">
                        {{ movie }}
                    </li>
                </ul>
    `
})


export class MoviesComponent {
    title = 'I Love Movies';
    movies = ['The Big Lebowski', 'The Fifth Element', 'High Fidelity']

    getTitle() {
        return this.title;
    }

}