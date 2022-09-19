import { Component } from '@angular/core';
import { MetalService } from './metal.service';

@Component({
    selector: 'metal',
    template: `<h2>{{ getTitle() }}</h2>
               <ul>
                    <li *ngFor="let metal of metals">
                        {{ metal }}
                    </li>
               </ul>
    `

})

export class MetalComponent {
    title = 'YOU CANNOT KILL THE METAL';
    metals;

    constructor(service: MetalService) {
        this.metals = service.getMetal();
    }

    getTitle() {
        return this.title;
    }
}