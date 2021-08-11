import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/api/customers`;

  list(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomerById(value: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + value);
  }

  createCustomer(value: Customer): Observable<number>  {
    return this.http.post<number>(this.apiUrl , value);
  }

  updateCustomer(value: Customer): Observable<number>  {
    return this.http.put<number>(this.apiUrl + '/' + value.id , value);
  }

  deleteCustomer(value: Customer): Observable<number> {
    return this.http.delete<number>(this.apiUrl + '/' + value.id);
  }

  search(value: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.apiUrl + '/search', value);
  }

}
