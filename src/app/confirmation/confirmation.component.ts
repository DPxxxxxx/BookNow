import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
  bookingDetails = signal<any>({});
  selectedSeats = signal<string[]>([]);
  seatPrices = signal<number[]>([]);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookingDetails.set({
        title: params['event'] || 'Event Title',
        date: params['date'] || 'Event Date',
        venue: params['venue'] || 'Event Venue',
        category: params['category'] || 'Event',
        total: parseInt(params['total']) || 0
      });
      
      this.selectedSeats.set(params['selectedSeats']?.split(',') || []);
      this.seatPrices.set(params['seatPrices']?.split(',').map(Number) || []);
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  downloadTicket() {
    // In a real app, this would generate and download a PDF ticket
    alert('Ticket download feature would be implemented here!');
  }
}
