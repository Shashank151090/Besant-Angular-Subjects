import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private messageService: MessageService, private router: Router) { }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Subject Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }
  goBack(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
