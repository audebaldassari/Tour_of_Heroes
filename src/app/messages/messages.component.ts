import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  resetUserForm(userForm: NgForm) {
    userForm.reset();
  }
}
