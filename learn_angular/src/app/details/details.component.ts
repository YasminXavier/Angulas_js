import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {Housinglocation} from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housinglocation?.photo"
        alt="Exterior photo of {{ housinglocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housinglocation?.name }}</h2>
        <p class="listing-location">{{ housinglocation?.city }}, {{ housinglocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housinglocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housinglocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housinglocation?.laundry }}</li>
          <!-- Notice that the housingLocation properties are being accessed with the optional chaining 
           operator ?. This ensures that if the housingLocation value is null or undefined the application 
           doesn't crash. -->
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housinglocation: Housinglocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housinglocation = this.housingService.getHousingLocationById(housingLocationId);
    /* Now the component has the code to display the correct information based on the selected 
    housing location. The constructor now includes a call to the HousingService to pass the 
    route parameter as an argument to the getHousingLocationById service function.*/
  }

  /* This code gives the DetailsComponent access to the 
  ActivatedRoute router feature that enables you to have access 
  to the data about the current route. In the constructor, the 
  code converts the id parameter acquired from the route from a 
  string to a number. 
  http://localhost:4200/details/0 */
}