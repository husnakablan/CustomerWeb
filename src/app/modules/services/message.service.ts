import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private toastrService: ToastrService) { }
  successMessage(message?: string, title?: string ){
    this.toastrService.success (message, title);
  }
  errorMessage(message?: string , title?: string){
    this.toastrService.error(message, title);
  }
}
