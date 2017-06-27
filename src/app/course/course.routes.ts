import { Routes,RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';


const routes: Routes = [
  {
    path: '', component: CourseComponent
  }
];

export const routing = RouterModule.forChild(routes);
