import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "app/shared/logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService: LoggingService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.logService.logStatus(status + ' (via service)');
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
