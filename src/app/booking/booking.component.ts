import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  eventDetails = signal<any>({});
  bookingForm: FormGroup;
  selectedTickets = signal(1);
  totalPrice = signal(0);
  isLoading = signal(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      paymentMethod: ['card', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.eventDetails.set({
        title: params['event'] || 'Event Title',
        date: params['date'] || 'Event Date',
        venue: params['venue'] || 'Event Venue',
        price: parseInt(params['price']) || 0,
        category: params['category'] || 'Event'
      });
      this.calculateTotal();
    });
  }

  onTicketChange(change: number) {
    const newCount = Math.max(1, this.selectedTickets() + change);
    this.selectedTickets.set(newCount);
    this.calculateTotal();
  }

  calculateTotal() {
    const price = this.eventDetails().price || 0;
    const tickets = this.selectedTickets();
    this.totalPrice.set(price * tickets);
  }

  onProceedToSeats() {
    if (this.bookingForm.valid) {
      this.router.navigate(['/seats'], {
        queryParams: {
          ...this.eventDetails(),
          tickets: this.selectedTickets(),
          total: this.totalPrice(),
          name: this.bookingForm.value.name,
          email: this.bookingForm.value.email,
          phone: this.bookingForm.value.phone
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
