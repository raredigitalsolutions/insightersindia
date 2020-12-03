import { Component, OnInit } from '@angular/core';
import { faBuilding, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }
  building = faBuilding
  phone = faPhoneAlt
  mail = faEnvelope
  ngOnInit(): void {
  }

}
