import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LateItemsComponent } from './late-items/late-items.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'main',
    component: DashboardComponent
  },
  {
    path: 'item-list',
    component: ItemListComponent
  },
  {
    path: 'item-form',
    component: ItemFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'item-form/:id',
    component: ItemFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'user-form/:id',
    component: UserFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'late-items',
    canActivate: [() => inject(AuthService).preventGuestAccess()],
    component: LateItemsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
