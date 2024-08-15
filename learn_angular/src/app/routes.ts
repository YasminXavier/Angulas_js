/* This file is where we will define the routes in the application.
Routing is the ability to navigate from one component in the 
application to another. */

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id'
      /* In this case, :id is dynamic and will change based on how
      the route is requested by the code. */,
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;