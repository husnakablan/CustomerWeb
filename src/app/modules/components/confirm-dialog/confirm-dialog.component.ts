import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  constructor(public modal: NgbActiveModal) {}

  static readonly RESULT_OK = 'RESULT_OK';
  readonly resultOk = ConfirmDialogComponent.RESULT_OK;
  @Input() public title = 'Kullanıcı Silme';
  @Input() public message = 'Bu kullanıcıyı silmek istediğinize emin misiniz?';
  @Output() confirm = new EventEmitter<any>(false);

  confirmOK(){
    this.confirm.emit();
    this.modal.close();
  }
}


