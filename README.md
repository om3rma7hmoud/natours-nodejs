# Natours - Tour Booking Application

A back-end focused tour booking application built with Node.js, Express, MongoDB, and Pug as part of an advanced Node.js learning journey. The application demonstrates authentication, authorization, payments, file uploads, security practices, and RESTful API development.

## Features

### Authentication & Authorization
- User signup and login
- JWT-based authentication
- Password reset via email
- Protected routes
- Role-based authorization (User, Guide, Lead Guide, Admin)

### Tour Management
- View all tours
- View detailed tour information
- Tour ratings and reviews
- Tour locations and itinerary
- Tour statistics and aggregation

### User Management
- Update user profile information
- Upload and update profile photo
- Change password securely
- View booked tours

### Reviews & Ratings
- Create reviews
- Update reviews
- Delete reviews
- Tour rating calculations

### Booking & Payments
- Stripe payment integration
- Secure checkout process
- Tour booking management

### Security
- Data sanitization
- Rate limiting
- XSS protection
- NoSQL injection protection
- Secure HTTP headers using Helmet

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- Pug
- HTML5
- CSS3
- JavaScript (ES6+)

### Authentication & Security
- JWT
- bcryptjs
- Helmet
- Express Rate Limit
- Express Mongo Sanitize

### Payments
- Stripe

### File Uploads
- Multer
- Sharp

### Development Tools
- Parcel
- Prettier

---

## Project Structure

```bash
natours-nodejs/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── dev-data/
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/om3rma7hmoud/natours-nodejs.git
```

### Navigate to Project Folder

```bash
cd natours-nodejs
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a file named:

```env
config.env
```

Add your environment variables:

```env
NODE_ENV=development

PORT=3000

DATABASE=YOUR_MONGODB_CONNECTION_STRING

DATABASE_PASSWORD=YOUR_PASSWORD

JWT_SECRET=YOUR_SECRET

JWT_EXPIRES_IN=90d

JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=YOUR_EMAIL

EMAIL_PASSWORD=YOUR_PASSWORD

EMAIL_HOST=YOUR_HOST

EMAIL_PORT=YOUR_PORT

EMAIL_FROM=YOUR_EMAIL

SENDGRID_USERNAME=YOUR_USERNAME

SENDGRID=YOUR_GRID_PASSWORD

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET
```

### Start Development Server

```bash
npm run dev
```

---

## API Documentation & Postman Collection

### Import the Collection
- Download the collection from `/postman/Natours API.postman_collection.json`
- Import it in Postman
- Set the environment variable: `{{url}}` = `http://localhost:3000/`

[Download Postman Collection](./postman/Natours%20API.postman_collection.json)

## API Features

### Filtering

```http
GET /api/v1/tours?difficulty=easy
```

### Sorting

```http
GET /api/v1/tours?sort=price
```

### Field Limiting

```http
GET /api/v1/tours?fields=name,price,ratingsAverage
```

### Pagination

```http
GET /api/v1/tours?page=2&limit=10
```

---

## Screenshots

### Home Page

Add screenshot here:

```md
![Home Page](screenshots/home.png)
```

### Tour Details

```md
![Tour Details](screenshots/tour-details.png)
```

### Login Page

```md
![Login Page](screenshots/login.png)
```

### User Account

```md
![User Account](screenshots/account.png)
```

---

## Development Background

This project was completed while studying an advanced Node.js back-end development course.

During the project, I worked with:

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication & Authorization
- RESTful APIs
- Stripe Payments
- Security Best Practices
- File Uploads & Image Processing
- Pug Templates
- MVC Architecture

The project provided hands-on experience building and maintaining a production-style back-end application.

## Learning Outcomes

This project helped me gain practical experience with:

- RESTful API Design
- MVC Architecture
- Authentication & Authorization
- MongoDB Data Modeling
- Security Best Practices
- Payment Integration
- File Uploads & Image Processing
- Error Handling
- Server-Side Rendering
- Full-Stack Application Development

---

## Future Improvements

- Interactive maps improvements
- Email templates enhancement
- Admin dashboard
- Advanced search and filtering
- Better UI/UX experience

---

## Author

Omar Mahmoud

GitHub:
https://github.com/om3rma7hmoud

---

## License

This project was built for educational and portfolio purposes.
