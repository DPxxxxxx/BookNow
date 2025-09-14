<<<<<<< HEAD
# BookNow - Online Ticket Booking System

A modern Angular application for booking tickets online for movies, concerts, sports events, and more.

## Features

- **Login Page**: Secure user authentication with form validation
- **Home Page**: Beautiful landing page with featured events and categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── login/           # Login component
│   │   └── login.component.ts
│   ├── home/            # Home page component
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.css
│   ├── app.routes.ts    # Application routing
│   └── app.ts          # Main app component
```

## Pages

### Login Page (`/login`)
- Email and password authentication
- Form validation with error messages
- Remember me functionality
- Forgot password link
- Responsive design

### Home Page (`/home`)
- Hero section with search functionality
- Featured events grid
- Category browsing
- Navigation header
- Footer with links and social media

## Technologies Used

- Angular 20
- TypeScript
- CSS3 with modern features
- Angular Reactive Forms
- Angular Router

## Future Enhancements

- User registration
- Event details pages
- Shopping cart functionality
- Payment integration
- User profile management
- Admin dashboard
- Real-time notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
=======
# BookNow
🎬 Online Movie Ticket Booking System

The Online Movie Ticket Booking System is a full-stack web application that allows users to browse movies, view showtimes, select seats, and book tickets seamlessly. It simplifies the traditional ticketing process by providing a digital platform with real-time updates, secure payment options, and easy booking management.

✨ Features

User Registration & Login (Authentication & Authorization)

Browse Movies (by category, language, ratings, etc.)

View Showtimes & Theatre Details

Seat Selection with real-time availability

Online Ticket Booking & Payment Integration

Booking History & Ticket Download

Admin Panel to manage movies, theatres, and show timings

🛠️ Tech Stack
Frontend

Angular (latest standalone API with bootstrapApplication) for building a responsive UI

TypeScript for type-safe development

HTML5, CSS3, Bootstrap/Tailwind for styling and layout

RxJS for handling asynchronous data streams

Backend

ASP.NET Core Web API for RESTful services

C# for business logic implementation

Entity Framework Core for ORM and database access

Database

SQL Server for storing users, movies, theatres, bookings, and payments

Authentication

JWT (JSON Web Tokens) for secure user authentication and role-based authorization

API Documentation

Swagger (OpenAPI) for testing and documenting APIs

Version Control & Deployment

Git & GitHub for version control

Docker (optional) for containerization

Azure / AWS / IIS for deployment

📊 System Design

ER Diagram: Represents Users, Movies, Theatres, Showtimes, Seats, and Bookings

Class Models: For handling business logic like User, Movie, Booking, Payment

REST APIs: Expose endpoints for login, movie listing, booking, and admin operations

🚀 Outcome

This system provides a scalable, secure, and user-friendly platform for booking movie tickets online, reducing manual effort, and enhancing customer experience with instant confirmations and digital ticketing.
>>>>>>> 224ea8382fb4673abd133944c848bd9789a8a1ed
