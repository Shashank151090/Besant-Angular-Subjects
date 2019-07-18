import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent,{static:true}) child: ChildComponent;
  receivedChildMessage: string;
  messageToSendP: string = '';
  stateToDisplay: string = "Hide";

  constructor() { }

  ngOnInit() {
  }

  toggleChild() {
    this.child.toggle();
    this.stateToDisplay = this.child.state;
  }

  sendToChild(message: string) {
    this.messageToSendP = message;
  }



  getMessage(message: string) {
    this.receivedChildMessage = message;
  }



}
