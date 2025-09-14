import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Event {
  title: string;
  date: string;
  venue: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery = signal('');
  filteredEvents = signal<Event[]>([]);

  featuredEvents = signal<Event[]>([
    {
      title: 'Avengers: Endgame',
      date: 'March 15, 2024',
      venue: 'AMC Theater',
      price: 15,
      category: 'Movie',
      image: 'assets/images/end game.jpg'
    },
    {
      title: 'Taylor Swift Concert',
      date: 'April 20, 2024',
      venue: 'Madison Square Garden',
      price: 150,
      category: 'Concert',
      image: 'assets/images/taylor_swift.jpg'
    },
    {
      title: 'Lakers vs Warriors',
      date: 'May 10, 2024',
      venue: 'Crypto.com Arena',
      price: 85,
      category: 'Sports',
      image: 'assets/images/lakers vs warriers.webp'
    }
  ]);

  categories = signal([
    {
      name: 'Movies',
      description: 'Latest blockbusters and classics',
      icon: 'fas fa-film'
    },
    {
      name: 'Concerts',
      description: 'Live music performances',
      icon: 'fas fa-music'
    },
    {
      name: 'Sports',
      description: 'Professional sports events',
      icon: 'fas fa-football-ball'
    },
    {
      name: 'Theater',
      description: 'Broadway shows and plays',
      icon: 'fas fa-theater-masks'
    }
  ]);

  constructor(private router: Router) {
    // Initialize filtered events with all featured events
    this.filteredEvents.set(this.featuredEvents());
  }

  onSearch() {
    const query = this.searchQuery().toLowerCase();
    if (query === '') {
      this.filteredEvents.set(this.featuredEvents());
    } else {
      const filtered = this.featuredEvents().filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query)
      );
      this.filteredEvents.set(filtered);
    }
  }

  onSearchInput(event: any) {
    this.searchQuery.set(event.target.value);
    this.onSearch();
  }

  bookEvent(event: any) {
    // Navigate to booking page with event details
    this.router.navigate(['/booking'], { 
      queryParams: { 
        event: event.title,
        date: event.date,
        venue: event.venue,
        price: event.price,
        category: event.category
      }
    });
  }

  logout() {
    // Clear any stored authentication data
    // For demo purposes, redirect to login
    this.router.navigate(['/login']);
  }
}