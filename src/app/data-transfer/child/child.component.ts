import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  visible: boolean = true;
  state: string = "";
  toggle(): void{
    this.visible = !this.visible;
    this.state = this.visible?"Hide": "Show";
  }

  @Input() receivedParentMessage: string;

  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = "Hello Parent !";


  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
  }

}
