import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  nome = 'WG';

  constructor(
    private router: Router
  ) {}
  
  exibindoNavbar() {
    return this.router.url !== '/login';
  }

}
