import {Routes} from '@angular/router';
import {CustomerListComponent} from './modules/customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './modules/customer/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './modules/customer/customer-update/customer-update.component';
import {CustomerViewComponent} from './modules/customer/customer-view/customer-view.component';

export const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent,
  },
  {
    path: 'customer-add',
    component: CustomerAddComponent,
  },
  {
    path: 'customer-update/:id',
    component: CustomerUpdateComponent,
  },
  {
    path: 'customer-view/:id',
    component: CustomerViewComponent,
  },
  {
    path: '',
    redirectTo: 'customer-list',
    pathMatch: 'full'
  }
 ];
