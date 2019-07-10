import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }
}
