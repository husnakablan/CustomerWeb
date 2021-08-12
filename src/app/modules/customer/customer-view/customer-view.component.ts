import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private service: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) { }

  customer = new Customer();

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getCustomerById(params.id).subscribe(value => {
        this.customer = value ;
      }, err => {
        this.messageService.errorMessage(JSON.stringify(err), 'Hata');
      });
    });
  }

  navigateForList() {
    this.router.navigateByUrl('/customer-list');
  }

}
