import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fire_service: FirebaseService, private route: ActivatedRoute ) { }

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
    content: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      if(data.subject){
        this.subject = data.subject
      }
    })
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
    data['date'] = new Date()
    this.fire_service.updateEnquiry(data).catch(() => {
      alert('There was an error while processing Your request. We apologize for the inconvenience.')
      this.disabled = false
    }).then(() => {

      if (!this.disabled) {
        this.profileForm.enable()
      } else {
        this.Submit = 'Submitted'
        alert('Your request has been submitted!')
      }
    })

    // console.log(data);

  }
}
