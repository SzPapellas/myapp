import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const MIN_PASSWORD_LENGTH = 6;

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validator: this.isPasswordMatch('password', 'confirmPassword')
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
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      errorMessages: {
        required: 'This field is required!'
      }
    },
    {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
      errorMessages: {
        required: 'This field is required!'
      }
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      errorMessages: {
        required: 'This field is required!',
        minlength: `This field should be at least ${MIN_PASSWORD_LENGTH} character longs!`
      }
    },
    {
      name: 'confirmPassword',
      label: 'confirm password',
      type: 'password',
      errorMessages: {
        required: 'This field is required!',
        minlength: `This field should be at least ${MIN_PASSWORD_LENGTH} character longs!`,
        mustMatch: 'Passwords do not match!'
      }
    }
  ];

  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  isPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
