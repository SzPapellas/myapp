import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    name: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  formFields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      errorMessages: {
        required: 'This field is required!',
        email: 'Please provide a valid email address!'
      }
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      errorMessages: {
        required: 'This field is required!',
        email: 'Please provide a valid email address!'
      }
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      errorMessages: {
        required: 'This field is required!'
      }
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      errorMessages: {
        required: 'This field is required!'
      }
    }/*,
    {
      name: 'message',
      label: 'Message',
      type: 'text',
      errorMessages: {
        required: 'This field is required!'
      }
    }*/
  ];

  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }
}
