import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'app/shared/logging.service';
import { AccountService } from 'app/shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(
    private logService: LoggingService,
    private accountService: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
