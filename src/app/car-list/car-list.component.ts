import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars = [
    { id: 1, make: 'Audi', model: 'A4', color: 'green' },
    { id: 2, make: 'Honda', model: 'Accord', color: 'purple' },
    { id: 3, make: 'Ford', model: 'Bronco', color: 'red' }
  ];

}
