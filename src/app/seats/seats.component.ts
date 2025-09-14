import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

interface Seat {
  id: string;
  row: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
  price: number;
}

@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css'
})
export class SeatsComponent implements OnInit {
  eventDetails = signal<any>({});
  selectedSeats = signal<Seat[]>([]);
  totalPrice = signal(0);
  requiredTickets = signal(1);

  // Generate seat layout
  rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  seatsPerRow = 12;
  seats: Seat[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.generateSeats();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.eventDetails.set({
        title: params['event'] || 'Event Title',
        date: params['date'] || 'Event Date',
        venue: params['venue'] || 'Event Venue',
        price: parseInt(params['price']) || 0,
        category: params['category'] || 'Event',
        tickets: parseInt(params['tickets']) || 1,
        total: parseInt(params['total']) || 0,
        name: params['name'] || '',
        email: params['email'] || '',
        phone: params['phone'] || ''
      });
      this.requiredTickets.set(parseInt(params['tickets']) || 1);
    });
  }

  generateSeats() {
    this.seats = [];
    this.rows.forEach((row, rowIndex) => {
      for (let i = 1; i <= this.seatsPerRow; i++) {
        // Randomly make some seats unavailable (about 30% occupied)
        const isAvailable = Math.random() > 0.3;
        
        // Different pricing based on row
        let price = 50;
        if (rowIndex < 3) price = 80; // Premium rows
        else if (rowIndex < 6) price = 60; // Standard rows
        else price = 40; // Economy rows

        this.seats.push({
          id: `${row}${i}`,
          row: row,
          number: i,
          isAvailable: isAvailable,
          isSelected: false,
          price: price
        });
      }
    });
  }

  toggleSeat(seat: Seat) {
    if (!seat.isAvailable) return;

    const currentSelected = this.selectedSeats();
    
    if (seat.isSelected) {
      // Deselect seat
      seat.isSelected = false;
      this.selectedSeats.set(currentSelected.filter(s => s.id !== seat.id));
    } else {
      // Check if we can select more seats
      if (currentSelected.length >= this.requiredTickets()) {
        return; // Can't select more seats than required
      }
      
      // Select seat
      seat.isSelected = true;
      this.selectedSeats.set([...currentSelected, seat]);
    }
    
    this.calculateTotal();
  }

  calculateTotal() {
    const total = this.selectedSeats().reduce((sum, seat) => sum + seat.price, 0);
    this.totalPrice.set(total);
  }

  getSeatsForRow(row: string): Seat[] {
    return this.seats.filter(seat => seat.row === row);
  }

  getSeatClass(seat: Seat): string {
    if (!seat.isAvailable) return 'seat occupied';
    if (seat.isSelected) return 'seat selected';
    return 'seat available';
  }

  canProceed(): boolean {
    return this.selectedSeats().length === this.requiredTickets();
  }

  onConfirmBooking() {
    if (this.canProceed()) {
      // Navigate to confirmation page or process payment
      this.router.navigate(['/confirmation'], {
        queryParams: {
          ...this.eventDetails(),
          selectedSeats: this.selectedSeats().map(s => s.id).join(','),
          seatPrices: this.selectedSeats().map(s => s.price).join(','),
          total: this.totalPrice()
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/booking'], {
      queryParams: this.eventDetails()
    });
  }
}
