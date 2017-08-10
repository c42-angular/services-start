import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from 'app/shared/logging.service';
import { AccountService } from 'app/shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    private logService: LoggingService,
    private accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.logService.logStatus(status + ' (via service)');
    // console.log('A server status changed, new status: ' + status);
  }
}
