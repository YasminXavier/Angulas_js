import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="results">
      <app-housing-location
        *ngFor="let housinglocation of filteredLocationList"
        [housinglocation]="housinglocation"> 
        <!-- Ngfor é uma diretiva Angular que permite percorrer um 
        array, ou qualquer objeto iterável, e exibir cada item do 
        array como elemento na tela. 
        Colocar o ngFor em um elemento HTML, ou componente, cria
        várias cópias desse elemento para cada item do array
        fornecido. 
        *ngFor="let user of users":
          • let user cria uma variável local que disponibiliza o
          valor decada usuário.
          • of users significa que iremos iterar, ou percorrer,
          o array de usuários.
        -->
      </app-housing-location>
    </section>
    
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  /* The filteredLocationList hold the values that match the 
  search criteria entered by the user.*/

  


  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  /* The constructor is the first function that runs when this 
  component is created. The code in the constructor will assign 
  the housingLocationList the value returned from the call to 
  getAllHousingLocations.*/
}