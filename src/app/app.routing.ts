import { ModuleWithProviders } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component' ;
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: MemberListComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
