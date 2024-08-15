import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location' 
    /* é como identificamos o nosso componente.
    Para todo o componente existe um elemento único associado que 
    permite que ele seja adicionado em um documento HTML. 
    Nesse caso, o nome do elemento desse componente é cadastro e
     deve ser escrito como <cadastro></cadastro> */,

  standalone: true
    /* Um Standalone Component (Componente Independente) é um 
    componente Angular que pode ser utilizado de forma isolada, 
    ou seja, sem depender de um NgModule. Ele é autocontido e não 
    requer a declaração em um módulo para ser utilizado. */,

  imports: [RouterLink, RouterOutlet]
    /* Import components into the template */,

  template /* ou TemplateUrl */: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housinglocation.photo"
        alt="Exterior photo of {{ housinglocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading"> {{ housinglocation.name }} </h2>
      <p class="listing-location"> {{ housinglocation.city }}, {{ housinglocation.state }} </p>
      <a [routerLink]="['/details', housinglocation.id]">Learn More</a>
    </section>
  ` /* TemplateUrl é o nome do documento HTML que será a parte 
    visual do componente. Nele podemos ter código em HTML juntamente 
    com todos os bindings e diretivas necessários para a exibição do 
    componente no navegador
    Template também usado para descrever a parte visual do 
    componente, porém nesse caso podemos fornecer código HTML 
    "hard coded", como texto*/,

  styleUrls /* ou Style */: [`./housing-location.component.css`], 
    /* styleUrl é onde informamos quais folhas de estilo contêm o 
    código CSS que será aplicado ao template do componente. */
})
export class HousingLocationComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  @Input() housinglocation!: Housinglocation; 
  /* You have to add the ! because the input is expecting the value 
  to be passed. In this case, there is no default value. 
  In our example application case we know that the value will be 
  passed in - this is by design*/
}
