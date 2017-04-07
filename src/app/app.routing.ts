import { ModuleWithProviders } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component' ;
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
