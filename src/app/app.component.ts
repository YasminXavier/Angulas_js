import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HousingService } from './housing.service';
import { Housinglocation } from './housinglocation';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header>
          <div class="top">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
            <input type="text" placeholder="Filter by city" (click)="filterResults(filter.value)" #filter/>
            <button class="primary" type="button"> Search</button>
          </div>
        </header>
      <!-- your app are enable to navigate back to the HomeComponent whenever the logo is clicked. -->
      </a>
      <section class="content">
       <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';

  

  

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  /* The filteredLocationList hold the values that match the 
  search criteria entered by the user.*/

  

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
    /* This function uses the String filter function to compare the 
    value of the text parameter against the housingLocation.city 
    property. */
  }
}
