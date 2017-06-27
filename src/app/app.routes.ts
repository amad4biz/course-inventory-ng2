import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'course', loadChildren: 'app/course/course.module#CourseModule' },
  { path: '**', component: HomeComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

