import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

function seatsValidator(control: FormControl) {
  const value = control.value;
  if (value < 0 || value > 8) {
    return { invalidSeats: true };
  }
  return null;
}

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css'],
})
export class OfferRideComponent implements OnInit {
  rideForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rideForm = this.fb.group({
      name: ['', Validators.required],
      startLocation: ['', Validators.required],
      destination: ['', Validators.required],
      car: ['', Validators.required],
      seatsAvailable: ['', [Validators.required, seatsValidator]],
    });
  }

  submitForm() {
    if (this.rideForm.valid) {
      const formData = this.rideForm.value;
      const message = `
        Name: ${formData.name}
        Start Location: ${formData.startLocation}
        Destination: ${formData.destination}
        Car: ${formData.car}
        Seats Available: ${formData.seatsAvailable}
      `;

      alert(message);
    }
  }

  goBack() {

  }
}