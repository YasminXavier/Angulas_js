import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <img
      class="listing-photo"
      [src]="housinglocation?.photo"
      alt="Exterior photo of {{ housinglocation?.name }}"
      crossorigin
    />
    <section class="listing-description">
      <h3 class="listing-heading">{{ housinglocation?.name }}</h3>
      <p class="listing-location">{{ housinglocation?.city }}, {{ housinglocation?.state }}</p>
    </section>
    <div>
      <section class="listing-features">
        <h4 class="section-heading">About this housing location</h4>
        <ul>
          <li>• Units available: {{ housinglocation?.availableUnits }}</li>
          <li>• Does this location have wifi: {{ housinglocation?.wifi }}</li>
          <li>• Does this location have laundry: {{ housinglocation?.laundry }}</li>
        </ul>
      </section>

      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here:</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">

          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />

          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </div>
  </article>
`,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housinglocation: Housinglocation | undefined;
  /* This code gives the DetailsComponent access to the 
ActivatedRoute router feature that enables you to have access 
to the data about the current route. In the constructor, the 
code converts the id parameter acquired from the route from a 
string to a number. 
http://localhost:4200/details/0 */

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    /* In Angular, FormGroup and FormControl are types that enable you 
    to build forms. The FormControl type can provide a default value and 
    shape the form data. In this example firstName is a string and the 
    default value is empty string.*/
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housinglocation = housingLocation;
    });
    /* Now the component has the code to display the correct information based on the selected 
    housing location. The constructor now includes a call to the HousingService to pass the 
    route parameter as an argument to the getHousingLocationById service function.*/
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
    /* The template now includes an event handler 
    (submit)="submitApplication()". Angular uses parentheses syntax around 
    the event name to define events in the template code. The code on the 
    right hand side of the equals sign is the code that should be executed 
    when this event is triggered*/
  }

}