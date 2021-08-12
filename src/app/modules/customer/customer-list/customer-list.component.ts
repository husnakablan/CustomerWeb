import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private service: CustomerService,
              private router: Router,
              private modalService: NgbModal,
              private messageService: MessageService) { }

  customerList: Customer[];
  customerFilter = new Customer();

  ngOnInit(): void {
    this.service.list().subscribe(value => {
      this.customerList = value;
    }, err => {
      this.messageService.errorMessage(JSON.stringify(err), 'Hata');
    });
  }

  navigateForUpdate(id: number) {
    this.router.navigateByUrl('/customer-update/' + id);
  }

  navigateForView(id: number) {
    this.router.navigateByUrl('/customer-view/' + id);
  }

  navigateForAdd() {
    this.router.navigateByUrl('/customer-add');
  }

  deleteCustomerConfirm(customer: Customer){
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.title = 'Müşteri Silme';
    modalRef.componentInstance.message = 'Bu müşteriyi silmek istediğinize emin misiniz?';
    modalRef.componentInstance.confirm.subscribe(() => {
      this.deleteCustomer(customer);
    });
  }

   private deleteCustomer(customer: Customer){
    this.service.deleteCustomer(customer).subscribe(value => {
      this.messageService.successMessage('Müşteri başarılı bir şekilde silindi', 'Müşteri Silme');
      this.search();
    }, err => {
      this.messageService.errorMessage(JSON.stringify(err), 'Hata');
    });
  }

  search() {
    this.service.search(this.customerFilter).subscribe( value => {
      this.customerList = value ;
    });
  }

  clear() {
    this.customerFilter = new Customer();
    this.search();
  }
}
