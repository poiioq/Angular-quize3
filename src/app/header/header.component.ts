import { Component, Input } from '@angular/core';
import { CarListComponent } from '../car-list/car-list.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CarListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() make: string;
  @Input() cars: Array<{ id: number, make: string, model: string, color: string }>;

  getTotalCars(): number {
    return this.cars.length;
  }

}
