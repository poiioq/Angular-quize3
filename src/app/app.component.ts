import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cars = [
    { id: 1, make: 'Audi', model: 'A4', color: 'green' },
    { id: 2, make: 'Honda', model: 'Accord', color: 'purple' },
    { id: 3, make: 'Ford', model: 'Bronco', color: 'red' }
  ];

}
