import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE!
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  standalone: true, // 👈 assicurati che sia standalone
  imports: [MatListModule, RouterModule], // 👈 aggiunto RouterModule
  template: `
    @for(item of menuItems; track item.path) {
      <a mat-list-item [routerLink]="item.path">{{ item.etichetta }}</a>
    }
  `
})
export class MenuComponent {
  menuItems: Array<MenuItem> = [
    { path: '/', etichetta: 'Home' },
    { path: '/categories', etichetta: 'Categorie' },
    { path: '/suppliers', etichetta: 'Fornitori' },
  ];
}
