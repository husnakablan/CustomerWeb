import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private service: CustomerService,
              private route: ActivatedRoute,
              private messageService: MessageService) { }

  customer = new Customer();

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getCustomerById(params.id).subscribe(value => {
        this.customer = value ;
      }, error => {
        console.log(error);
        this.messageService.errorMessage(error.toString(), 'HATA');
      });
    });
  }
}
