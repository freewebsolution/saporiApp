import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  imports: [MatListModule],
  template: `
    @for(item of menuItems;track item.path){
      <a mat-list-item [href]="item.path">{{item.etichetta}}</a>
    }
  `,
  styles: ``
})
export class MenuComponent {
   menuItems: Array<MenuItem> = [
    {
      path:'/',
      etichetta:'Home'
    },
    {
      path:'/categories',
      etichetta:'Categorie'
    },
    
    {
      path:'/suppliers',
      etichetta:'Fornitori'
    },
  ]


}
