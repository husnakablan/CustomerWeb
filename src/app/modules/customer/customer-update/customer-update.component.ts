import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../services/message.service';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private service: CustomerService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) {
  }

  customer = new Customer();
  validated = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getCustomerById(params.id).subscribe(value => {
        this.customer = value;
      }, err => {
        this.messageService.errorMessage(JSON.stringify(err), 'Hata');
      });
    });
  }

  updateCustomer(customerForm: HTMLFormElement) {
    this.validated = true;
    if (!customerForm.checkValidity()) {
      return;
    }
    this.service.updateCustomer(this.customer).subscribe(() => {
      this.messageService.successMessage('Güncelleme başarılı.', 'GÜNCELLEME');
      this.router.navigateByUrl('/customer-list');
    }, err => {
      this.messageService.errorMessage(JSON.stringify(err), 'Hata');
    });
  }

  validate(ngModel: NgModel) {
    return ngModel.invalid && (ngModel.touched || this.validated);
  }
}
