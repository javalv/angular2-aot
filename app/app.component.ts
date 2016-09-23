import {Component} from '@angular/core';
// import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    template: `
        <main>
        <h1>Hello from Angular 2 App with Webpack</h1>
        <nav>
            <a routerLink="/home" >home</a>
            <a routerLink="/heroes" >page12</a>
        </nav>
        <router-outlet></router-outlet>
        </main>`,

})
export class AppComponent {
}