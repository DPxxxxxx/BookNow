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
