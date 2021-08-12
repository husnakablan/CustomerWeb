import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {MessageService} from '../../services/message.service';
import {NgModel} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private service: CustomerService,
              private messageService: MessageService,
              private router: Router) { }

  customer = new Customer();
  validated = false;

  ngOnInit(): void {
  }

  addCustomer(customerForm: HTMLFormElement) {
    this.validated = true;
    if (!customerForm.checkValidity()) {
      return;
    }
    this.service.createCustomer(this.customer).subscribe(() => {
      this.messageService.successMessage('Müşteri oluşturuldu.', 'Müşteri Ekle');
      this.router.navigateByUrl('/customer-list');
    }, err => {
      this.messageService.errorMessage(JSON.stringify(err), 'Hata');
    });
  }

  validate(ngModel: NgModel) {
    return ngModel.invalid && (ngModel.touched || this.validated);
  }
}
