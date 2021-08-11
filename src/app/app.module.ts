import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './modules/app/app.component';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask';
import {AlertComponent} from './modules/components/alert/alert.component';
import {CustomerListComponent} from './modules/customer/customer-list/customer-list.component';
import {CustomerUpdateComponent} from './modules/customer/customer-update/customer-update.component';
import {ConfirmDialogComponent} from './modules/components/confirm-dialog/confirm-dialog.component';
import {CustomerViewComponent} from './modules/customer/customer-view/customer-view.component';
import {routes} from './app-routes';
import {CustomerAddComponent} from './modules/customer/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    CustomerViewComponent,
    AlertComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
