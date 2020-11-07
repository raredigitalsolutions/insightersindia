import { FirebaseService } from './../../../services/firebase.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fire_service: FirebaseService) { }

  @Input('subject') subject: string = 'Insighters India'
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
    city: new FormControl('', [Validators.required, Validators.minLength(4)]),
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

  submit() {
    this.Submit = 'Sending'
    this.profileForm.disable()
    this.disabled = true

    let data = <JSON>this.profileForm.getRawValue()
    data['subject'] = this.subject
    this.fire_service.updateEnquiry(data).finally(()=>{
      this.Submit = 'Submitted'
      alert('Your request has been submitted!')
    })

    // console.log(data);

  }
}
