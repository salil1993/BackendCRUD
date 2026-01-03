# BackendCRUD - REST API Development Demo

Production-ready Node.js backend demonstrating REST API best practices, database design, and full CRUD operations. Built with Express.js and MySQL, showcasing layered architecture, error handling, and scalable patterns.

---

## Overview

**BackendCRUD** is a comprehensive backend service that demonstrates:
- RESTful API design principles
- MySQL database modeling and queries
- Express.js middleware and routing patterns
- Error handling and validation
- Layered architecture (routes → controllers → services → models)
- Secure credential management

---

## Tech Stack

- **Runtime:** Node.js v14+
- **Framework:** Express.js
- **Database:** MySQL
- **ORM/Query Builder:** MySQL2, Sequelize (if configured)
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express-validator
- **Testing:** Jest, Mocha
- **API Documentation:** Postman / Swagger

---

## Features

- **CRUD Operations:** Complete Create, Read, Update, Delete functionality
- **Database Design:** Normalized MySQL schema with relationships
- **RESTful Endpoints:** Standard HTTP methods (GET, POST, PUT, DELETE)
- **Error Handling:** Centralized error middleware with consistent responses
- **Input Validation:** Request validation and sanitization
- **Authentication:** JWT-based route protection
- **Logging:** Request/response logging for debugging
- **Pagination:** Support for paginated list endpoints

---

## Setup & Run

### Prerequisites

- Node.js v14+
- MySQL 5.7 or higher
- npm or yarn

### Installation

```bash
git clone https://github.com/salil1993/BackendCRUD.git
cd BackendCRUD
npm install
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=backendcrud_db
DB_PORT=3306

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRY=7d

# API
API_VERSION=v1
```

### Database Setup

```bash
# Create database
mysql -u root -p
CREATE DATABASE backendcrud_db;
USE backendcrud_db;

# Import schema (if provided)
source db/schema.sql;
```

### Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:3000`

---

## API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Example Endpoints (Users)

```
GET    /users              - Get all users (paginated)
GET    /users/:id          - Get user by ID
POST   /users              - Create new user
PUT    /users/:id          - Update user
DELETE /users/:id          - Delete user
```

### Request/Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

---

## Architecture & Design

### Folder Structure
```
src/
  routes/        # API route definitions
  controllers/   # Request handlers, business logic
  services/      # Business logic, database operations
  models/        # Database models
  middlewares/   # Authentication, validation, error handling
  utils/         # Helper functions, validators
  config/        # Database and app configuration
  
db/
  schema.sql     # Database schema
  migrations/    # Database migrations (if using)
```

### Key Design Decisions

1. **Layered Architecture:** Separation between routes, controllers, and services for maintainability
2. **Middleware Pattern:** Express middleware for authentication, validation, and error handling
3. **Error Handling:** Centralized error middleware with custom error classes
4. **Validation:** Input validation at controller/middleware level
5. **Database:** Connection pooling for better performance
6. **Security:** JWT tokens, password hashing, SQL injection prevention

---

## Testing & Quality

### Unit Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Linting
```bash
npm run lint    # ESLint
```

---

## Database Schema Example

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## Troubleshooting

**Database Connection Error:**
```
Verify DB credentials in .env
Ensure MySQL is running
Check DB_HOST and DB_PORT
```

**Port Already in Use:**
```bash
# Change PORT in .env or:
lsof -i :3000  # Find process
kill -9 <PID>  # Kill process
```

**JWT Authentication Failed:**
- Verify JWT_SECRET in .env
- Check token format in Authorization header
- Ensure token is not expired

---

## Future Improvements

- Add database migrations system (Sequelize Migrations)
- Implement caching layer (Redis)
- Add API rate limiting
- Swagger/OpenAPI documentation
- GraphQL layer for API
- Comprehensive test coverage
- Docker containerization

---

## License

MIT License

---

## Connect

Built by [Salil Samdarshy](https://github.com/salil1993) | Senior Mobile Engineer  
LinkedIn: [linkedin.com/in/saliljha1993](https://linkedin.com/in/saliljha1993)
