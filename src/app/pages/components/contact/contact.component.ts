import { FirebaseService } from './../../../services/firebase.service';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fire_service: FirebaseService) { }
  disabled = false
  phone_valid = false
  drop_valid = false
  Submit = 'Submit'
  userForm = new FormGroup({
    // firstName: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),

  });

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    content: new FormControl('', [Validators.required, Validators.minLength(10)]),
    subject: new FormControl(NONE_TYPE, [Validators.required])
  });

  ngOnInit(): void {

  }

  phone_validation() {
    if (this.profileForm.getRawValue().phone) {
      if (this.profileForm.getRawValue().phone.toString().length == 10) {
        this.phone_valid = true
      } else {
        this.phone_valid = false
      }

    }
  }

  drop_validation() {
    this.drop_valid = true
  }
  submit() {


    this.fire_service.updateEnquiry(this.profileForm.getRawValue()).finally(()=>{
      this.disabled = true
      this.Submit = 'Submitted'
      this.profileForm.disable()
    })

  }
}
