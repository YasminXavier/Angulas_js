import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from './housing.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: HousingService,
    multi: true,
  }
]
})
export class AppModule { }
