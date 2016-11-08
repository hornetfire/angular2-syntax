import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.component.html'
})
export class AppComponent {
    firstName: string = 'Hudson Graham';
    item: string = '';
    items: string[] = [];
    link: string = 'http://angular.io';

    person: any = null;
    addPerson() {
        this.person = {}
        this.person.alias = 'Secret Alias';
    }

    isPrimary: boolean = false;
    activate() {
        this.isPrimary = !this.isPrimary;
    }

    addItem(item: string) {
        this.items.push(item);
    }
}
