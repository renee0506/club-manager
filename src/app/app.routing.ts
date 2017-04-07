import { ModuleWithProviders } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component' ;
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
