import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from 'app/shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logService: LoggingService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logService.logStatus(status + ' (via service)');
    // console.log('A server status changed, new status: ' + status);
  }
}
